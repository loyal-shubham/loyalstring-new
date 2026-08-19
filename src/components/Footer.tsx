import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link href="/" className="logo" style={{ display: "inline-block", marginBottom: "1rem" }}>
            <img src="/logos/logo_black_name.jpeg" alt="Loyal String Logo" style={{ height: "100px", width: "auto", display: "block" }} />
          </Link>
          <p className="footer-desc">
            Global manufacturer of premium RFID guns and RFID tags. Empowering business tracking and security worldwide.
          </p>
        </div>
        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: info@loyalstring.com</p>
          <p>Phone: +91 123 456 7890</p>
          <p>Location: New Delhi, India (Global HQ)</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Loyal String International Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}
