"use client";

import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";

const headOffice = {
  address: "Rajashree Estate, Hinjawadi Phase II, Pune, Maharashtra 411057",
  phone: "+91 70666 10009",
  email: "contact@loyalstring.com",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5454444321117!2d73.7008323117981!3d18.594520882440495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb7988219215%3A0x19b40a90f4613705!2sLoyal%20String%20International%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1785235108250!5m2!1sen!2sin",
};

export default function ContactPage() {
  return (
    <div style={{ animation: "fadeIn var(--transition-normal)", backgroundColor: "#f9fafc" }}>
      
      {/* Banner Section with Dark Overlay */}
      <div style={{ width: "100%", height: "450px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <Image 
          src="/contact_banner.jpg" 
          alt="Contact Background" 
          fill
          style={{ objectFit: "cover", zIndex: 0 }}
          priority
        />
        {/* Dark overlay to make text pop and match the reference */}
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(10, 37, 64, 0.8)", zIndex: 1 }}></div>
        
        <div style={{ position: "relative", zIndex: 2, padding: "0 2rem", marginTop: "-50px" }}>
          <h1 style={{ color: "#ffffff", fontSize: "3rem", fontWeight: "700", marginBottom: "1rem" }}>Contact us</h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}>
            Our team is ready to provide the right enterprise tracking and security solution according to your needs.
          </p>
        </div>
      </div>

      {/* Overlapping Card Container */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 10, marginTop: "-120px", paddingBottom: "6rem" }}>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", backgroundColor: "#ffffff", borderRadius: "16px", boxShadow: "0 20px 40px rgba(0,0,0,0.08)", overflow: "hidden" }}>
          
          {/* Left Column: Get in Touch */}
          <div style={{ padding: "4rem", backgroundColor: "#fcfdff", borderRight: "1px solid #f0f0f0" }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: "700", color: "#111827", marginBottom: "1rem" }}>Get in touch</h2>
            <p style={{ color: "#6b7280", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "3rem" }}>
              Have questions about our RFID solutions or need a custom quote? Reach out to our global team today.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginBottom: "3rem" }}>
              {/* Head Office */}
              <div style={{ display: "flex", gap: "1.5rem" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: "var(--accent-primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "white" }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#111827", marginBottom: "0.25rem" }}>Head Office</h3>
                  <p style={{ color: "#6b7280", fontSize: "0.9rem", lineHeight: "1.5" }}>
                    {headOffice.address}
                  </p>
                </div>
              </div>

              {/* Email Us */}
              <div style={{ display: "flex", gap: "1.5rem" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: "var(--accent-primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "white" }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#111827", marginBottom: "0.25rem" }}>Email Us</h3>
                  <p style={{ color: "#6b7280", fontSize: "0.9rem", lineHeight: "1.5" }}>
                    {headOffice.email}
                  </p>
                </div>
              </div>

              {/* Call Us */}
              <div style={{ display: "flex", gap: "1.5rem" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: "var(--accent-primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "white" }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#111827", marginBottom: "0.25rem" }}>Call Us</h3>
                  <p style={{ color: "#6b7280", fontSize: "0.9rem", lineHeight: "1.5" }}>
                    {headOffice.phone}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 style={{ fontSize: "1rem", fontWeight: "600", color: "#111827", marginBottom: "1rem" }}>Follow our social media</h3>
              <div style={{ display: "flex", gap: "1rem" }}>
                {[
                  <svg key="fb" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>,
                  <svg key="tw" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>,
                  <svg key="li" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
                  <svg key="ig" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                ].map((icon, i) => (
                  <a key={i} href="#" style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "var(--accent-primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", transition: "opacity 0.2s" }} onMouseOver={e => e.currentTarget.style.opacity = "0.8"} onMouseOut={e => e.currentTarget.style.opacity = "1"}>
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div style={{ padding: "4rem" }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: "700", color: "#111827", marginBottom: "2rem" }}>Send us a message</h2>
            <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }} onSubmit={(e) => e.preventDefault()}>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="name" style={{ fontSize: "0.85rem", color: "#6b7280", fontWeight: "500" }}>Name</label>
                  <input type="text" id="name" style={{ padding: "0.75rem 0", border: "none", borderBottom: "1px solid #e5e7eb", backgroundColor: "transparent", outline: "none", fontSize: "0.95rem", color: "#111827" }} placeholder="John Doe" />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="company" style={{ fontSize: "0.85rem", color: "#6b7280", fontWeight: "500" }}>Company</label>
                  <input type="text" id="company" style={{ padding: "0.75rem 0", border: "none", borderBottom: "1px solid #e5e7eb", backgroundColor: "transparent", outline: "none", fontSize: "0.95rem", color: "#111827" }} placeholder="Your Company" />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="phone" style={{ fontSize: "0.85rem", color: "#6b7280", fontWeight: "500" }}>Phone</label>
                  <input type="tel" id="phone" style={{ padding: "0.75rem 0", border: "none", borderBottom: "1px solid #e5e7eb", backgroundColor: "transparent", outline: "none", fontSize: "0.95rem", color: "#111827" }} placeholder="+91 00000 00000" />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="email" style={{ fontSize: "0.85rem", color: "#6b7280", fontWeight: "500" }}>Email</label>
                  <input type="email" id="email" style={{ padding: "0.75rem 0", border: "none", borderBottom: "1px solid #e5e7eb", backgroundColor: "transparent", outline: "none", fontSize: "0.95rem", color: "#111827" }} placeholder="john@example.com" />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label htmlFor="subject" style={{ fontSize: "0.85rem", color: "#6b7280", fontWeight: "500" }}>Subject</label>
                <input type="text" id="subject" style={{ padding: "0.75rem 0", border: "none", borderBottom: "1px solid #e5e7eb", backgroundColor: "transparent", outline: "none", fontSize: "0.95rem", color: "#111827" }} placeholder="How can we help?" />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label htmlFor="message" style={{ fontSize: "0.85rem", color: "#6b7280", fontWeight: "500" }}>Message</label>
                <textarea id="message" rows={3} style={{ padding: "0.75rem 0", border: "none", borderBottom: "1px solid #e5e7eb", backgroundColor: "transparent", outline: "none", fontSize: "0.95rem", color: "#111827", resize: "vertical" }} placeholder="Write your message here..."></textarea>
              </div>

              <button type="submit" style={{ marginTop: "1rem", backgroundColor: "var(--accent-primary)", color: "white", border: "none", borderRadius: "8px", padding: "1rem", fontSize: "1rem", fontWeight: "600", cursor: "pointer", transition: "background-color 0.2s" }} onMouseOver={e => e.currentTarget.style.backgroundColor = "var(--accent-hover)"} onMouseOut={e => e.currentTarget.style.backgroundColor = "var(--accent-primary)"}>
                Send
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Full Width Map Section */}
      <div style={{ width: "100%", height: "450px" }}>
        <iframe 
          src={headOffice.mapEmbedUrl} 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
