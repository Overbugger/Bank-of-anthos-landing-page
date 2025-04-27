import dynamic from "next/dynamic";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Providers = dynamic(() => import("@/components/Providers"), {
  ssr: false,
});

export const metadata = {
  title: "Bank of Anthos",
  description: "Banking You Can Believe In",
  icons: {
    icon: [{ url: "/favicon.png" }],
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#FFF] overflow-x-hidden">
        <Navbar />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
