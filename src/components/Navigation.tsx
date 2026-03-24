"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/rezepte", label: "Rezepte" },
  { href: "/pizzerien", label: "Pizzerien" },
  { href: "/workshops", label: "Workshops" },
  { href: "/ausruestung", label: "🔥 Ausrüstung" },
  { href: "/faq", label: "❓ FAQ" },
  { href: "/ueber", label: "Über uns" },
];

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-[#9CA3AF] hover:text-[#E85D04] transition-colors"
        aria-label="Menu"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-[#2D2D2D] rounded-xl shadow-xl border border-white/10 overflow-hidden">
          <nav className="p-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-[#9CA3AF] hover:text-[#E85D04] hover:bg-[#3D3D3D] rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A]/90 backdrop-blur-lg border-b border-white/5">
      <div className="container-max px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <span className="text-2xl">🍕</span>
            <span>
              Pizza<span className="text-[#E85D04]">Soul</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#9CA3AF] hover:text-[#E85D04] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

const footerLinks = {
  navigation: [
    { href: "/rezepte", label: "Rezepte" },
    { href: "/pizzerien", label: "Pizzerien" },
    { href: "/workshops", label: "Workshops" },
    { href: "/ausruestung", label: "🔥 Ausrüstung" },
    { href: "/faq", label: "❓ FAQ" },
    { href: "/ueber", label: "Über uns" },
  ],
  legal: [
    { href: "/impressum", label: "Impressum" },
    { href: "/datenschutz", label: "Datenschutz" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#2D2D2D] border-t border-white/5">
      <div className="container-max px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold mb-4">
              <span className="text-3xl">🍕</span>
              <span>
                Pizza<span className="text-[#E85D04]">Soul</span>
              </span>
            </Link>
            <p className="text-[#9CA3AF] text-sm max-w-md">
              The Perfect Slice – für Liebhaber, nicht für Touristen. Der beste Pizza
              Blog im Ruhrgebiet mit Rezepten, Workshops und den besten Pizzerien.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-[#9CA3AF]">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#E85D04] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm text-[#9CA3AF]">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#E85D04] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#9CA3AF] text-sm">
            © 2026 PizzaSoul – Made with 🍕 in the Ruhrgebiet
          </p>
          <p className="text-[#9CA3AF] text-sm">
            Ein Projekt von{" "}
            <a
              href="https://shadowsinthe.space"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E85D04] hover:underline"
            >
              shadowsinthe.space
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
