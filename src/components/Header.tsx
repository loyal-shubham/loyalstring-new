"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/products" },
    { name: "Projects", path: "#" },
    { name: "Blog", path: "#" },
    { name: "Pages", path: "#" },
  ];

  return (
    <header className={`header ${isHome ? "header-home" : "glass-card"}`}>
      <div className="header-container">
        <Link href="/" className="logo" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img
            src="/logos/logo_white.png"
            alt="Loyal String Logo"
            style={{ height: "60px", width: "auto" }}
            className={isHome ? "" : ""}
          />
          <span style={{ 
            marginLeft: "12px", 
            fontWeight: 800, 
            fontSize: "1.5rem", 
            letterSpacing: "-0.02em",
            color: isHome ? "rgba(255, 255, 255, 0.9)" : "var(--text-primary)" 
          }}>
            Loyal String
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className={`nav-link ${pathname === link.path ? "active" : ""}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button Desktop */}
        <div className="header-contact-btn desktop-only">
          <Link href="/contact" className="btn btn-primary">
            Contact Us
          </Link>
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
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="mobile-nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="btn btn-primary"
                onClick={() => setIsOpen(false)}
                style={{ width: "100%", textAlign: "center", marginTop: "1rem" }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </motion.nav>
      )}
    </header>
  );
}
