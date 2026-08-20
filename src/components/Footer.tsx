import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="w-full px-6 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
        <div className="footer-brand lg:col-span-2">
          <Link href="/" className="logo block mb-4">
            <img src="/logos/logo_black_name.jpeg" alt="Loyal String Logo" className="h-20 w-auto block" />
          </Link>
          <p className="footer-desc">
            Global technology provider of Software Solutions, Digital Marketing, and premium RFID/EAS Hardware. Empowering business tracking, scale, and security worldwide.
          </p>
        </div>
        
        <div className="footer-links">
          <h3>Industries</h3>
          <ul>
            <li><Link href="/industries/retailer">Retailer</Link></li>
            <li><Link href="/industries/library">Library</Link></li>
            <li><Link href="/industries/medical">Medical</Link></li>
            <li><Link href="/industries/warehousing">Warehousing</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Services</h3>
          <ul>
            <li><Link href="/services/software">Software Dev</Link></li>
            <li><Link href="/services/digital-marketing">Digital Marketing</Link></li>
            <li><Link href="/services/seo">SEO</Link></li>
            <li><Link href="/services/consulting">Business Consulting</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Products</h3>
          <ul>
            <li><Link href="/products/eas">EAS</Link></li>
            <li><Link href="/products/rfid">RFID</Link></li>
            <li><Link href="/products/hardware">Hardware</Link></li>
          </ul>
        </div>

        <div className="footer-contact lg:col-span-1">
          <h3>Contact Us</h3>
          <p className="text-sm">Email: info@loyalstring.com</p>
          <p className="text-sm">Phone: +91 123 456 7890</p>
          <p className="text-sm">Location: 201, rajshree estate hinjawadi phase 2 pune</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Loyal String International Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}
