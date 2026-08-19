"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="section container">
      <div className="section-header text-center" style={{ marginBottom: "4rem" }}>
        <h1 className="heading-1">Get in Touch</h1>
        <p className="text-lead" style={{ maxWidth: "600px", margin: "1rem auto 0" }}>
          Have questions about our RFID solutions or need a custom quote? Our global team is ready to assist you.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", maxWidth: "1000px", margin: "0 auto" }}>
        
        {/* Contact Info */}
        <div>
          <h2 className="heading-2" style={{ marginBottom: "2rem" }}>Contact Information</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ display: "flex", gap: "1rem" }}>
              <div style={{ color: "var(--accent-primary)" }}><MapPin size={24} /></div>
              <div>
                <h3 className="heading-3" style={{ fontSize: "1.25rem", marginBottom: "0.25rem" }}>Global Headquarters</h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Loyal String International Pvt. Ltd.<br />
                  Business Tech Park, Sector 62<br />
                  New Delhi, India 110001
                </p>
              </div>
            </div>
            
            <div style={{ display: "flex", gap: "1rem" }}>
              <div style={{ color: "var(--accent-primary)" }}><Phone size={24} /></div>
              <div>
                <h3 className="heading-3" style={{ fontSize: "1.25rem", marginBottom: "0.25rem" }}>Phone</h3>
                <p style={{ color: "var(--text-secondary)" }}>+91 123 456 7890</p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              <div style={{ color: "var(--accent-primary)" }}><Mail size={24} /></div>
              <div>
                <h3 className="heading-3" style={{ fontSize: "1.25rem", marginBottom: "0.25rem" }}>Email</h3>
                <p style={{ color: "var(--text-secondary)" }}>info@loyalstring.com</p>
                <p style={{ color: "var(--text-secondary)" }}>sales@loyalstring.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="heading-3" style={{ marginBottom: "1.5rem" }}>Send us a message</h2>
          <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }} onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label htmlFor="name" style={{ fontWeight: "500", fontSize: "0.875rem" }}>Full Name</label>
              <input type="text" id="name" style={{ padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--border-color)", background: "var(--bg-secondary)" }} placeholder="John Doe" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label htmlFor="email" style={{ fontWeight: "500", fontSize: "0.875rem" }}>Business Email</label>
              <input type="email" id="email" style={{ padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--border-color)", background: "var(--bg-secondary)" }} placeholder="john@company.com" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label htmlFor="message" style={{ fontWeight: "500", fontSize: "0.875rem" }}>Message</label>
              <textarea id="message" rows={4} style={{ padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--border-color)", background: "var(--bg-secondary)", resize: "vertical" }} placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ marginTop: "1rem", width: "100%" }}>
              Submit Request
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}
