import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-12 pb-8 border-t border-slate-900 mt-12">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap lg:flex-nowrap gap-8 justify-between mb-8">
          
          {/* Brand & Description */}
          <div className="w-full lg:w-1/3 xl:w-1/4 pr-4">
            <Link href="/" className="inline-block mb-4">
              <div className="flex items-center gap-3">
                <img src="/logos/logo_white.png" alt="Loyal String Logo" className="h-8 w-auto" />
                <span className="text-white text-xl font-bold tracking-tight">Loyal String</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Global technology provider of Software Solutions, Digital Marketing, and premium RFID/EAS Hardware. Empowering business tracking, scale, and security worldwide.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-400 hover:text-white hover:border-blue-400 transition-all shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links: Industries */}
          <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[15%]">
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide">Industries</h3>
            <ul className="flex flex-col gap-2">
              <li><Link href="/industries/retailer" className="text-sm hover:text-white text-slate-400 transition-colors">Retailer</Link></li>
              <li><Link href="/industries/library" className="text-sm hover:text-white text-slate-400 transition-colors">Library</Link></li>
              <li><Link href="/industries/medical" className="text-sm hover:text-white text-slate-400 transition-colors">Medical</Link></li>
              <li><Link href="/industries/warehousing" className="text-sm hover:text-white text-slate-400 transition-colors">Warehousing</Link></li>
            </ul>
          </div>

          {/* Quick Links: Services */}
          <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[15%]">
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide">Services</h3>
            <ul className="flex flex-col gap-2">
              <li><Link href="/services/software-development" className="text-sm hover:text-white text-slate-400 transition-colors">Software Dev</Link></li>
              <li><Link href="/services/digital-marketing" className="text-sm hover:text-white text-slate-400 transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services/seo" className="text-sm hover:text-white text-slate-400 transition-colors">SEO</Link></li>
              <li><Link href="/services/business-consulting" className="text-sm hover:text-white text-slate-400 transition-colors">Consulting</Link></li>
            </ul>
          </div>

          {/* Quick Links: Products */}
          <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[15%]">
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide">Products</h3>
            <ul className="flex flex-col gap-2">
              <li><Link href="/products/eas" className="text-sm hover:text-white text-slate-400 transition-colors">EAS</Link></li>
              <li><Link href="/products/rfid" className="text-sm hover:text-white text-slate-400 transition-colors">RFID</Link></li>
              <li><Link href="/products/hardware" className="text-sm hover:text-white text-slate-400 transition-colors">Hardware</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full lg:w-1/4 xl:w-[22%]">
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all"><MapPin size={16} /></div>
                <span className="text-sm text-slate-400 leading-relaxed group-hover:text-white transition-colors pt-[4px]">201, Rajshree Estate, Hinjawadi Phase 2, Pune</span>
              </li>
              <li className="flex items-center gap-3 group">
                <a href="tel:+917066610009" className="flex items-center gap-3 w-full">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all"><Phone size={16} /></div>
                  <span className="text-sm text-slate-400 group-hover:text-white transition-colors">+91 70666 10009</span>
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <a href="https://wa.me/917066610009?text=Hi%20Sparkle%20RFID%20Team%2C%20I%20want%20to%20know%20more%20about%20your%20jewellery%20RFID%20solutions." target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 w-full">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c.003-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg>
                  </div>
                  <span className="text-sm text-slate-400 group-hover:text-white transition-colors">WhatsApp Us</span>
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <a href="mailto:info@loyalstring.com" className="flex items-center gap-3 w-full">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all"><Mail size={16} /></div>
                  <span className="text-sm text-slate-400 group-hover:text-white transition-colors">info@loyalstring.com</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-6 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Loyal String International Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
