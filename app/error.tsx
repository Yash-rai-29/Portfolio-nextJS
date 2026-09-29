"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h2 className="mb-2 text-2xl font-semibold">Something went wrong</h2>
      <p className="mb-6 max-w-md text-sm text-gray-600 dark:text-gray-400">
        This page hit an unexpected error. You can try again, or reload the page.
      </p>
      <button
        type="button"
        onClick={reset}
        className="rounded-full bg-gray-900 px-6 py-2.5 text-sm font-medium text-white dark:bg-white/10"
      >
        Try again
      </button>
    </main>
  );
}
