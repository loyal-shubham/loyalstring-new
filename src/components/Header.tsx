"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import NavMegaMenu, { type MegaMenuItem } from "./NavMegaMenu";
import "./Header.css";

type NavLink = {
  name: string;
  path: string;
  align?: "start" | "center" | "end";
  dropdown?: MegaMenuItem[];
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const closeMenuTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDesktopMenu = (name: string) => {
    if (closeMenuTimer.current) {
      clearTimeout(closeMenuTimer.current);
      closeMenuTimer.current = null;
    }
    setOpenMenu(name);
  };

  const scheduleCloseDesktopMenu = () => {
    if (closeMenuTimer.current) clearTimeout(closeMenuTimer.current);
    closeMenuTimer.current = setTimeout(() => setOpenMenu(null), 200);
  };
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

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const updateHeight = () => setHeaderHeight(el.offsetHeight);
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(el);
    window.addEventListener("resize", updateHeight);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, [isOpen, pathname]);

  useEffect(() => {
    return () => {
      if (closeMenuTimer.current) clearTimeout(closeMenuTimer.current);
    };
  }, []);

  const isTransparent = isHome && !isScrolled;
  const headerClass = isTransparent ? "header-transparent" : "header-scrolled";

  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    {
      name: "Industries",
      path: "/industries",
      align: "start",
      dropdown: [
        {
          name: "Retailer",
          path: "/industries/retailer",
          description: "RFID for stores, textile tracking, and EAS loss prevention from floor to checkout.",
          image: "/images/retail_rfid.png",
        },
        {
          name: "Library",
          path: "/industries/library",
          description: "Self-checkout, smart returns, and collection security with RFID inventory tools.",
          image: "/images/library_rfid.png",
        },
        {
          name: "Medical",
          path: "/industries/medical",
          description: "Track equipment, supplies, and compliance across hospital floors in real time.",
          image: "/images/medical_rfid.png",
        },
        {
          name: "Warehousing",
          path: "/industries/warehousing",
          description: "Dock-door reads, pallet location, and forklift tracking for faster logistics.",
          image: "/images/warehouse_rfid.png",
        },
      ],
    },
    {
      name: "Services",
      path: "/services",
      align: "center",
      dropdown: [
        {
          name: "Software Development",
          path: "/services/software-development",
          description: "Enterprise apps, RFID middleware, and mobile tools built around your operations.",
          image: "/images/services/software-development.jpg",
        },
        {
          name: "Digital Marketing",
          path: "/services/digital-marketing",
          description: "Demand generation for RFID, hardware, and software brands that need qualified buyers.",
          image: "/images/services/digital-marketing.jpg",
        },
        {
          name: "SEO",
          path: "/services/seo",
          description: "Rank for product catalogs and high-intent searches from procurement and operations teams.",
          image: "/images/services/seo.jpg",
        },
        {
          name: "Business Consulting",
          path: "/services/business-consulting",
          description: "Roadmaps that connect process, software, RFID, and robotics and automation.",
          image: "/images/services/business-consulting.jpg",
        },
      ],
    },
    {
      name: "Products",
      path: "/products",
      align: "end",
      dropdown: [
        {
          name: "EAS",
          path: "/products/eas",
          description: "Security gates, hard tags, and checkout deactivators for high-traffic retail floors.",
          image: "/images/products/eas.jpg",
        },
        {
          name: "RFID",
          path: "/products/rfid",
          description: "Handheld guns, portals, tags, and software that turn reads into live inventory data.",
          image: "/images/products/rfid.jpg",
        },
        {
          name: "Hardware",
          path: "/products/hardware",
          description: "POS terminals, scanners, printers, and networking for store and warehouse operations.",
          image: "/images/products/hardware.jpg",
        },
      ],
    },
    { name: "About Us", path: "/about" },
    { name: "Vision 2030", path: "/vision-2030" },
    { name: "Contact", path: "/contact" },
  ];

  const visibleNavLinks = isHome
    ? navLinks.filter((link) => link.path !== "/")
    : navLinks;

  const isNavActive = (path: string) => {
    if (path === "/vision-2030") {
      return isHome || pathname === "/vision-2030";
    }
    return pathname === path;
  };

  return (
    <>
    <header ref={headerRef} className={`header ${headerClass}`}>
      <div className="header-container">
        <Link href="/" className="logo flex items-center no-underline min-w-0 shrink">
          <img
            src={isTransparent ? "/logos/logo_white.png" : "/logos/logo_black.png"}
            alt="Loyal String Logo"
            className="h-10 lg:h-[60px] w-auto block"
          />
          <span className="ml-2 lg:ml-3 font-extrabold text-[1rem] sm:text-[1.15rem] lg:text-[1.3rem] tracking-tight" style={{ color: isTransparent ? "rgba(255, 255, 255, 0.95)" : "var(--text-primary)" }}>
            Loyal String
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-list flex items-center gap-8">
            {visibleNavLinks.map((link) => (
              <li
                key={link.name}
                className={`py-2 ${link.dropdown ? "nav-item-has-menu" : ""} ${openMenu === link.name ? "is-open" : ""}`}
                onMouseEnter={() => {
                  if (link.dropdown) openDesktopMenu(link.name);
                }}
                onMouseLeave={() => {
                  if (link.dropdown) scheduleCloseDesktopMenu();
                }}
              >
                <Link
                  href={link.path}
                  className={`nav-link flex items-center gap-1 ${link.path === "/vision-2030" ? "nav-link-vision" : ""} ${isNavActive(link.path) ? "active" : ""}`}
                  aria-haspopup={link.dropdown ? "true" : undefined}
                  aria-expanded={link.dropdown ? openMenu === link.name : undefined}
                >
                  {link.name} {link.dropdown && <ChevronDown size={14} />}
                </Link>
                {link.dropdown && (
                  <NavMegaMenu
                    items={link.dropdown}
                    open={openMenu === link.name}
                    onMouseEnter={() => openDesktopMenu(link.name)}
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="https://wa.me/917066610009?text=Hi%20Sparkle%20RFID%20Team%2C%20I%20want%20to%20know%20more%20about%20your%20jewellery%20RFID%20solutions." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 text-white transition-colors" title="WhatsApp Us">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0" fill="#ffffff" viewBox="0 0 16 16">
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
            {visibleNavLinks.map((link) => {
              const hasDropdown = !!link.dropdown;
              const isExpanded = expandedMenu === link.name;
              const isActive = isNavActive(link.path);
              
              return (
              <li key={link.name} className="pb-5">
                {hasDropdown ? (
                  <div 
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setExpandedMenu(isExpanded ? null : link.name)}
                  >
                    <span className={`font-semibold text-[1.1rem] ${isActive ? "text-blue-600" : "text-slate-800"}`}>
                      {link.name}
                    </span>
                    <ChevronDown size={20} className={`text-slate-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </div>
                ) : (
                  <Link
                    href={link.path}
                    className={`font-semibold text-[1.1rem] block ${link.path === "/vision-2030" ? "nav-link-vision-mobile" : ""} ${isActive ? (link.path === "/vision-2030" ? "active" : "text-blue-600") : "text-slate-800"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
                
                {hasDropdown && isExpanded && (
                  <div className="pl-1 mt-4 flex flex-col gap-3">
                    {link.dropdown?.map((drop) => (
                      <Link
                        key={drop.name}
                        href={drop.path}
                        className="mobile-sub-link text-[0.95rem] text-slate-600 hover:text-blue-600"
                        onClick={() => setIsOpen(false)}
                      >
                        <img src={drop.image} alt="" className="mobile-sub-thumb" />
                        <span>
                          <span className="block font-semibold text-slate-800">{drop.name}</span>
                          <span className="block text-xs text-slate-500 leading-snug mt-0.5">{drop.description}</span>
                        </span>
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
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0" fill="#ffffff" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c.003-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg> WhatsApp Us
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
    {!isHome && (
      <div
        className="header-spacer"
        aria-hidden="true"
        style={headerHeight ? { height: headerHeight } : undefined}
      />
    )}
    </>
  );
}
