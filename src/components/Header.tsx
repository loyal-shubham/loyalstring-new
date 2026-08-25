"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = isHome && !isScrolled;
  const headerClass = isTransparent ? "header-transparent" : "header-scrolled";

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
        { name: "Software Development", path: "/services/software-development" },
        { name: "Digital Marketing", path: "/services/digital-marketing" },
        { name: "SEO", path: "/services/seo" },
        { name: "Business Consulting", path: "/services/business-consulting" },
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
    <header className={`header ${headerClass}`}>
      <div className="header-container">
        <Link href="/" className="logo flex items-center no-underline">
          <img
            src={isTransparent ? "/logos/logo_white.png" : "/logos/logo_black.png"}
            alt="Loyal String Logo"
            className="h-10 lg:h-[60px] w-auto"
          />
          <span className="ml-2 lg:ml-3 font-extrabold text-[1.15rem] lg:text-[1.3rem] tracking-tight" style={{ color: isTransparent ? "rgba(255, 255, 255, 0.95)" : "var(--text-primary)" }}>
            Loyal String
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-list flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group py-2">
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
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
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

        {/* Contact Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="tel:+911234567890" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', padding: '0.5rem 1.25rem' }}>
            <Phone size={16} />
            +91 123 456 7890
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          style={{ color: isTransparent ? "#fff" : "var(--text-primary)" }}
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
                  style={{ color: "var(--text-primary)" }}
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
                        style={{ color: 'var(--text-primary)' }}
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
              <a
                href="tel:+911234567890"
                className="btn btn-primary"
                onClick={() => setIsOpen(false)}
                style={{ width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: "1rem", fontSize: '0.9rem', padding: '0.75rem' }}
              >
                <Phone size={16} /> +91 123 456 7890
              </a>
            </li>
          </ul>
        </motion.nav>
      )}
    </header>
  );
}
