import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevOps & DevSecOps Portfolio",
  description: "Professional portfolio showcasing DevOps and DevSecOps expertise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed top-0 w-full bg-gray-900 text-white z-50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold">DevOps Portfolio</div>
              <div className="hidden md:flex space-x-8">
                <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
                <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
                <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
                <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
                <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="container mx-auto px-6 text-center">
            <p>© {new Date().getFullYear()} - DevOps Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
