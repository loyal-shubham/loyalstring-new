"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, ShoppingCart, Phone, ChevronDown } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navLinks = [
    { name: "Home", path: "/" },
    { 
      name: "Industries", 
      path: "/industries",
      dropdown: [
        { name: "Retailer", path: "/industries/retailer" },
        { name: "Library", path: "/industries/library" },
        { name: "Medical", path: "/industries/medical" },
        { name: "Warehousing", path: "/industries/warehousing" },
      ]
    },
    { 
      name: "Services", 
      path: "/services",
      dropdown: [
        { name: "Software Development", path: "/services/software" },
        { name: "Digital Marketing", path: "/services/digital-marketing" },
        { name: "SEO", path: "/services/seo" },
        { name: "Business Consulting", path: "/services/consulting" },
      ]
    },
    { 
      name: "Products", 
      path: "/products",
      dropdown: [
        { name: "EAS", path: "/products/eas" },
        { name: "RFID", path: "/products/rfid" },
        { name: "Hardware", path: "/products/hardware" },
      ]
    },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className={`header ${isHome ? "header-home" : "glass-card"}`}>
      <div className="header-container">
        <Link href="/" className="logo flex items-center no-underline">
          <img
            src={isHome ? "/logos/logo_white.png" : "/logos/logo_black.png"}
            alt="Loyal String Logo"
            className="h-10 lg:h-[60px] w-auto"
          />
          <span className="ml-2 lg:ml-3 font-extrabold text-[1.15rem] lg:text-[1.5rem] tracking-tight" style={{ color: isHome ? "rgba(255, 255, 255, 0.9)" : "var(--text-primary)" }}>
            Loyal String
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-list flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group py-4">
                <Link
                  href={link.path}
                  className={`nav-link flex items-center gap-1 ${pathname === link.path ? "active" : ""}`}
                >
                  {link.name} {link.dropdown && <ChevronDown size={14} />}
                </Link>
                
                {link.dropdown && (
                  <div className="absolute top-full left-0 hidden group-hover:block w-56 bg-white shadow-xl border border-slate-100 rounded-xl overflow-hidden py-2 z-50">
                    {link.dropdown.map(drop => (
                      <Link 
                        key={drop.name} 
                        href={drop.path}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                      >
                        {drop.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact & Cart Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/cart" aria-label="Cart" style={{ color: isHome ? '#fff' : 'inherit', transition: 'opacity 0.2s' }} className="hover:opacity-80">
            <ShoppingCart size={24} />
          </Link>
          <a href="tel:+911234567890" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Phone size={18} />
            +91 123 456 7890
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          style={{ color: isHome ? "#fff" : "inherit" }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mobile-nav"
        >
          <ul className="mobile-nav-list max-h-[70vh] overflow-y-auto pb-6">
            {navLinks.map((link) => (
              <li key={link.name} className="border-b border-slate-100/10 pb-2">
                <Link
                  href={link.path}
                  className="mobile-nav-link font-semibold block py-2"
                  onClick={() => !link.dropdown && setIsOpen(false)}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 mt-2 flex flex-col gap-3">
                    {link.dropdown.map(drop => (
                      <Link 
                        key={drop.name} 
                        href={drop.path}
                        className="text-sm opacity-80 hover:opacity-100 block py-1"
                        style={{ color: 'inherit' }}
                        onClick={() => setIsOpen(false)}
                      >
                        - {drop.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
            <li>
              <Link
                href="/cart"
                className="mobile-nav-link"
                onClick={() => setIsOpen(false)}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <ShoppingCart size={20} /> Cart
              </Link>
            </li>
            <li>
              <a
                href="tel:+911234567890"
                className="btn btn-primary"
                onClick={() => setIsOpen(false)}
                style={{ width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: "1rem" }}
              >
                <Phone size={18} /> +91 123 456 7890
              </a>
            </li>
          </ul>
        </motion.nav>
      )}
    </header>
  );
}
