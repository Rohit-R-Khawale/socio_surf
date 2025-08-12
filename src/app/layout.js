import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import News from "../components/News";
import SessionWrapper from "../components/SessionWrapper";
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
        <SessionWrapper>
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
            <div className="p-4 h-screen hidden lg:inline lg:flex-col border-l border-gray-500 w-[24rem]">
              <div className="sticky top-0 bg-white py-2">
                <input
                  type="text"
                  placeholder="Search"
                  autoComplete="off"
                  className="bg-gray-100 border-gray-200 rounded-3xl w-full px-4  py-2 "
                />
              </div>
              <News />
            </div>
          </div>
        </body>
    </SessionWrapper>
      </html>
  );
}
