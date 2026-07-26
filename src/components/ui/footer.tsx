"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 py-12 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold">ContentForge AI</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              AI-powered content repurposing for modern creators. Turn one piece into 10+ assets.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <Link href="/#features" className="block hover:text-gray-900 dark:hover:text-white transition-colors">Features</Link>
              <Link href="/#pricing" className="block hover:text-gray-900 dark:hover:text-white transition-colors">Pricing</Link>
              <Link href="/changelog" className="block hover:text-gray-900 dark:hover:text-white transition-colors">Changelog</Link>
              <Link href="/roadmap" className="block hover:text-gray-900 dark:hover:text-white transition-colors">Roadmap</Link>
              <Link href="/affiliate" className="block hover:text-gray-900 dark:hover:text-white transition-colors">Affiliates</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <Link href="/about" className="block hover:text-gray-900 dark:hover:text-white transition-colors">About</Link>
              <Link href="/blog" className="block hover:text-gray-900 dark:hover:text-white transition-colors">Blog</Link>
              <Link href="/careers" className="block hover:text-gray-900 dark:hover:text-white transition-colors">Careers</Link>
              <Link href="/contact" className="block hover:text-gray-900 dark:hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <Link href="/privacy" className="block hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="block hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="block hover:text-gray-900 dark:hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mb-6">
          <a href="https://x.com/contentforgeai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black hover:bg-gray-800 flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label="X (Twitter)">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://github.com/Mbilal-1050/contentforge-ai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#181717] hover:bg-gray-800 flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label="GitHub">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="https://linkedin.com/company/contentforgeai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#0A66C2] hover:bg-blue-700 flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://instagram.com/contentforgeai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label="Instagram">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
        </div>

        <div className="pt-8 border-t border-gray-100 dark:border-gray-800 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} ContentForge AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
