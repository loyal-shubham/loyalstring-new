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
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
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
        <div className="hidden lg:flex items-center gap-4">
          <a href="https://wa.me/917066610009?text=Hi%20Sparkle%20RFID%20Team%2C%20I%20want%20to%20know%20more%20about%20your%20jewellery%20RFID%20solutions." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 text-white transition-colors" title="WhatsApp Us">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c.003-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
          </a>
          <a href="tel:+917066610009" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', padding: '0.5rem 1.25rem' }}>
            <Phone size={16} />
            +91 70666 10009
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
          <ul className="mobile-nav-list max-h-[70vh] overflow-y-auto pb-6 pt-4">
            {navLinks.map((link) => {
              const hasDropdown = !!link.dropdown;
              const isExpanded = expandedMenu === link.name;
              
              return (
              <li key={link.name} className="pb-5">
                {hasDropdown ? (
                  <div 
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setExpandedMenu(isExpanded ? null : link.name)}
                  >
                    <span className="font-semibold text-slate-800 text-[1.1rem]">
                      {link.name}
                    </span>
                    <ChevronDown size={20} className={`text-slate-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </div>
                ) : (
                  <Link
                    href={link.path}
                    className="font-semibold text-slate-800 text-[1.1rem] block"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
                
                {hasDropdown && isExpanded && (
                  <div className="pl-4 mt-4 flex flex-col gap-4">
                    {link.dropdown?.map(drop => (
                      <Link 
                        key={drop.name} 
                        href={drop.path}
                        className="text-[0.95rem] text-slate-600 hover:text-blue-600 block"
                        onClick={() => setIsOpen(false)}
                      >
                        {drop.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            )})}

            <li className="flex flex-col gap-3 mt-2">
              <a
                href="https://wa.me/917066610009?text=Hi%20Sparkle%20RFID%20Team%2C%20I%20want%20to%20know%20more%20about%20your%20jewellery%20RFID%20solutions."
                target="_blank"
                rel="noopener noreferrer"
                className="btn flex items-center justify-center gap-2 rounded-md shadow-sm"
                onClick={() => setIsOpen(false)}
                style={{ width: "100%", backgroundColor: '#22c55e', color: 'white', padding: '0.75rem', fontSize: '0.95rem', fontWeight: 600 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c.003-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg> WhatsApp Us
              </a>
              <a
                href="tel:+917066610009"
                className="btn btn-primary shadow-sm rounded-md"
                onClick={() => setIsOpen(false)}
                style={{ width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.95rem', padding: '0.75rem' }}
              >
                <Phone size={16} /> +91 70666 10009
              </a>
            </li>
          </ul>
        </motion.nav>
      )}
    </header>
  );
}
