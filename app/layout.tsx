import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PlanProvider } from "@/components/PlanProvider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description: "Train with intent. Log every set."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <PlanProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster position="top-right" toastOptions={{ style: { background: "#151515", color: "#fff", border: "1px solid #333" } }} />
        </PlanProvider>
      </body>
    </html>
  );
}
