import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import News from "./components/News";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Socio Surf",
  description:
    "A clone of scial media website built with next js and tailwind css",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex justify-between max-w-6xl mx-auto">
          {/* Sidebar */}
          <div className="hidden sm:inline h-screen border-r border-gray-500">
            <Sidebar />
          </div>

          {children}

          {/* News */}
          <div className="">
            <News/>
          </div>
        </div>
      </body>
    </html>
  );
}
