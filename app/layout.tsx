import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


// Load Inter with tight tracking for that "Tech" look
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });


export const metadata: Metadata = {
  title: "Dhruv | AI & ML Engineer",
  description: "Portfolio of Dhruv, a Machine Learning Engineer specializing in Agentic AI, Computer Vision, and MLOps.",
  // Open Graph is what shows up on LinkedIn/Twitter cards
  openGraph: {
    title: "Dhruv | AI & ML Engineer",
    description: "Building scalable AI agents and predictive models.",
    url: "https://your-domain.com",
    siteName: "Dhruv.AI",
    images: [
      {
        url: "/og-image.png", // You'll need to add an image to your public folder later
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};
// app/layout.tsx

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      {/* Add suppressHydrationWarning here 👇 */}
      <body 
        className={`${inter.variable} font-sans bg-black text-white antialiased selection:bg-white selection:text-black`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}