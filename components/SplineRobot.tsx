"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "@/context/theme-context";

// Use ErrorBoundary to prevent app crash
class ErrorBoundary extends React.Component<
  { children: React.ReactNode }, 
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // Return empty div instead of error UI to avoid visual disruption
      return <div className="hidden"></div>;
    }

    return this.props.children;
  }
}

// Dynamically import Spline with loading and error fallbacks
const Spline = dynamic(
  () => import('@splinetool/react-spline').catch(() => {
    // Return a dummy component if module fails to load
    const FallbackComponent = () => <div className="hidden"></div>;
    FallbackComponent.displayName = 'SplineFallback';
    return FallbackComponent;
  }),
  {
    ssr: false,
    loading: () => {
      const LoadingComponent = () => <div className="hidden"></div>;
      LoadingComponent.displayName = 'SplineLoading';
      return <LoadingComponent />;
    }
  }
);

function SplineComponent({ theme }: { theme: string }) {
  const [hasError, setHasError] = useState(false);

  // Disable in production if needed
  useEffect(() => {
    // Check if we're in a production environment
    if (process.env.NODE_ENV === 'production') {
      // You can decide whether to show or hide the component in production
      // setHasError(true); // Uncomment to disable in production
    }
  }, []);

  if (hasError) {
    return null;
  }

  try {
    return (
      <Spline 
        scene={theme === "light" ? "/scene.splinecode" : "/whiterobo.splinecode"}
        style={{ width: '100%', height: '100%' }}
        onError={() => setHasError(true)}
      />
    );
  } catch (e) {
    console.error("Spline render error:", e);
    return null;
  }
}

export default function SplineRobot() {
  const { theme } = useTheme();
  
  return (
    <div className="fixed bottom-4 left-4 z-[900] pointer-events-none hidden sm:block" style={{ width: '150px', height: '150px' }}>
      <ErrorBoundary>
        <SplineComponent theme={theme} />
      </ErrorBoundary>
    </div>
  );
}
