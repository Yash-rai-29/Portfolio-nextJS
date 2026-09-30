import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import MotionProvider from "@/components/motion-provider";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const siteDescription =
  "Software Engineer at Aviato Consulting | GCP Professional Data Engineer | AI/ML agents, data pipelines and backend systems on Google Cloud";

export const metadata = {
  metadataBase: new URL("https://yash-portfolio-next.vercel.app"),
  title: "Yash | Personal Portfolio",
  description: siteDescription,
  openGraph: {
    title: "Yash Rai | Software Engineer",
    description: siteDescription,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Yash Rai | Software Engineer",
    description: siteDescription,
  },
};

// Runs before first paint so dark-mode visitors never see a light flash.
const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {/* Preload experience logos for instantaneous navigation */}
        <link rel="preload" as="image" href="/aviato_consulting_logo.jpeg" />
        <link rel="preload" as="image" href="/tryclarity_logo.jpeg" />
        <link rel="preload" as="image" href="/binplus_logo.jpeg" />
        <link rel="preload" as="image" href="/abhyazlearning_logo.jpeg" />
      </head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-20 md:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* Soft background glow. Radial gradients instead of blurred shapes:
            a large blur filter is re-rendered every frame and made scrolling
            and transitions stutter. Fixed, so it never repaints on scroll. */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute top-[-12rem] right-[-12rem] h-[40rem] w-[40rem] md:right-[2%] md:h-[50rem] md:w-[62rem] animate-blob bg-[radial-gradient(closest-side,rgba(234,206,207,0.95),rgba(234,206,207,0))] dark:bg-[radial-gradient(closest-side,rgba(100,98,148,0.65),rgba(100,98,148,0))]" />
          <div className="absolute top-[-4rem] left-[-16rem] h-[40rem] w-[40rem] md:left-[-6%] md:h-[50rem] md:w-[62rem] animate-blob-delay bg-[radial-gradient(closest-side,rgba(160,196,226,0.95),rgba(160,196,226,0))] dark:bg-[radial-gradient(closest-side,rgba(148,99,144,0.6),rgba(148,99,144,0))]" />
        </div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <MotionProvider>
              <Header />
              {children}
              <Analytics />
              <Toaster position="bottom-center" />
              <ThemeSwitch />
            </MotionProvider>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>

        {/* ElevenLabs Voice Assistant Widget */}
        <elevenlabs-convai agent-id="agent_7501k437m2hhf7aarcnc0pyegbgt" />

        {/* TODO: pin a specific version (and add an integrity hash) instead of the moving latest tag. */}
        <Script
          src="https://unpkg.com/@elevenlabs/convai-widget-embed"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
