"use client";

import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";

export type MegaMenuItem = {
  name: string;
  path: string;
  description: string;
  image: string;
};

export default function NavMegaMenu({
  items,
  open = false,
  onMouseEnter,
}: {
  items: MegaMenuItem[];
  align?: "start" | "center" | "end";
  open?: boolean;
  onMouseEnter?: () => void;
}) {
  const [active, setActive] = useState(items[0]);
  const menuRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  useLayoutEffect(() => {
    if (!open) return;

    const place = () => {
      const trigger = menuRef.current?.closest(".nav-item-has-menu") as HTMLElement | null;
      if (!trigger) return;

      const rect = trigger.getBoundingClientRect();
      const menuWidth = Math.min(520, window.innerWidth - 32);
      const margin = 16;
      let left = rect.left;

      if (left + menuWidth > window.innerWidth - margin) {
        left = window.innerWidth - margin - menuWidth;
      }
      if (left < margin) left = margin;

      setCoords({ top: rect.bottom - 4, left });
    };

    place();
    window.addEventListener("resize", place);
    window.addEventListener("scroll", place, true);
    return () => {
      window.removeEventListener("resize", place);
      window.removeEventListener("scroll", place, true);
    };
  }, [open]);

  return (
    <div
      ref={menuRef}
      className={`mega-menu ${open ? "is-open" : ""}`}
      style={{ top: coords.top, left: coords.left }}
      onMouseEnter={onMouseEnter}
    >
      <div className="hidden" aria-hidden>
        {items.map((item) => (
          <img key={item.image} src={item.image} alt="" />
        ))}
      </div>
      <div className="mega-menu-panel">
        <ul className="mega-menu-list" role="list">
          {items.map((item) => {
            const isActive = active.path === item.path;
            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`mega-menu-item ${isActive ? "is-active" : ""}`}
                  onMouseEnter={() => setActive(item)}
                  onFocus={() => setActive(item)}
                >
                  <span>{item.name}</span>
                  <ChevronRight size={14} className={`mega-menu-chevron ${isActive ? "is-visible" : ""}`} />
                </Link>
              </li>
            );
          })}
        </ul>

        <Link href={active.path} className="mega-menu-preview" aria-label={active.name}>
          <img
            key={active.image}
            src={active.image}
            alt=""
            className="mega-menu-preview-image"
          />
          <div className="mega-menu-preview-overlay" />
          <div className="mega-menu-preview-copy">
            <p className="mega-menu-preview-title">{active.name}</p>
            <p className="mega-menu-preview-text">{active.description}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
