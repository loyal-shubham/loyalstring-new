"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Clock, Building, ExternalLink, Globe } from "lucide-react";
import Image from "next/image";

const headOffices = [
  {
    id: "pune-hq",
    name: "Head Office",
    subtitle: "Software & Corporate HQ",
    city: "Hinjawadi, Pune",
    company: "Loyal String International Pvt. Ltd.",
    address:
      "HPV3+R93 Rajashree Estate, Hinjawadi Phase II, Rajiv Gandhi Infotech Park, Hinjawadi, Pimpri-Chinchwad, Maharashtra 411057",
    phone: "+91 70666 10009",
    email: "contact@loyalstring.com",
    hours: "Mon – Sat: 9:30 AM – 7:00 PM IST",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5454444321117!2d73.7008323117981!3d18.594520882440495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb7988219215%3A0x19b40a90f4613705!2sLoyal%20String%20International%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1785235108250!5m2!1sen!2sin",
    directionsUrl: "https://maps.google.com/?q=Loyal+String+International+Pvt.+Ltd.+Hinjawadi",
  },
  {
    id: "pune-mfg",
    name: "Manufacturing Office",
    subtitle: "Hardware Plant",
    city: "Bhosari MIDC, Pune",
    company: "Loyal String International Pvt. Ltd.",
    address:
      "Plot No. 77, Sector Number 7 Rd, PCNTDA, MIDC, Bhosari, Pimpri-Chinchwad, Maharashtra 411026",
    phone: "+91 70666 10009",
    email: "contact@loyalstring.com",
    hours: "Mon – Sat: 9:00 AM – 6:30 PM IST",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.5184104588625!2d73.83794089999999!3d18.640718800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9586d096115%3A0xb73c2ad001d33bf6!2sLoyal%20String%20International%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1785235683284!5m2!1sen!2sin",
    directionsUrl:
      "https://maps.google.com/?q=Plot+No.+77+Sector+Number+7+Rd+PCNTDA+MIDC+Bhosari+Pimpri-Chinchwad",
  },
];

const regions = ["India", "UAE", "United Kingdom"];

export default function ContactPage() {
  const [activeLocation, setActiveLocation] = useState(headOffices[0]);

  return (
    <div style={{ animation: "fadeIn var(--transition-normal)", backgroundColor: "#f9fafc" }}>

      {/* Banner Section with Dark Overlay */}
      <div style={{ width: "100%", height: "400px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
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
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 10, marginTop: "-100px", paddingBottom: "4rem" }}>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", backgroundColor: "#ffffff", borderRadius: "16px", boxShadow: "0 20px 40px rgba(0,0,0,0.08)", overflow: "hidden" }}>

          {/* Left Column: Map */}
          <div style={{ width: "100%", height: "100%", minHeight: "500px", backgroundColor: "#e5e7eb" }}>
            <iframe
              src={activeLocation.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Right Column: Addresses */}
          <div style={{ padding: "2.5rem", backgroundColor: "#fcfdff", borderLeft: "1px solid #f0f0f0" }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: "700", color: "#111827", marginBottom: "1rem" }}>Our Locations</h2>
            <p style={{ color: "#6b7280", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "2rem" }}>
              Find our offices or get in touch with our global team.
            </p>

            {/* Regions */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem", flexWrap: "wrap" }}>
              <Globe size={18} style={{ color: "var(--accent-primary)" }} />
              <span style={{ fontSize: "0.9rem", color: "#6b7280", fontWeight: "500" }}>Global Presence:</span>
              {regions.map((region) => (
                <span key={region} style={{ padding: "0.25rem 0.75rem", backgroundColor: "#f3f4f6", borderRadius: "9999px", fontSize: "0.8rem", color: "#374151", fontWeight: "500" }}>
                  {region}
                </span>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", marginBottom: "3rem" }}>
              {headOffices.map((loc, index) => (
                <div key={loc.id}>
                  <div
                    onClick={() => setActiveLocation(loc)}
                    style={{
                      padding: "1rem 0",
                      cursor: "pointer",
                      transition: "opacity 0.2s",
                      opacity: activeLocation.id === loc.id ? 1 : 0.6,
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                      <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: activeLocation.id === loc.id ? "var(--accent-primary)" : "#111827" }}>{loc.name}</h3>
                      <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.5rem", backgroundColor: "var(--accent-primary)", color: "white", borderRadius: "4px", fontWeight: "600" }}>{loc.city}</span>
                    </div>
                    <p style={{ fontSize: "0.9rem", color: "var(--accent-primary)", fontWeight: "600", marginBottom: "0.75rem" }}>{loc.subtitle}</p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      <div style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                        <Building size={18} style={{ color: "var(--accent-primary)", marginTop: "0.15rem", flexShrink: 0 }} />
                        <p style={{ color: "#4b5563", fontSize: "0.9rem", fontWeight: "500" }}>{loc.company}</p>
                      </div>
                      <div style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                        <MapPin size={18} style={{ color: "var(--accent-primary)", marginTop: "0.25rem", flexShrink: 0 }} />
                        <p style={{ color: "#6b7280", fontSize: "0.9rem", lineHeight: "1.5" }}>{loc.address}</p>
                      </div>
                      <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
                        <Phone size={18} style={{ color: "var(--accent-primary)", flexShrink: 0 }} />
                        <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>{loc.phone}</p>
                      </div>
                      <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
                        <Mail size={18} style={{ color: "var(--accent-primary)", flexShrink: 0 }} />
                        <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>{loc.email}</p>
                      </div>
                      <div style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                        <Clock size={18} style={{ color: "var(--accent-primary)", marginTop: "0.15rem", flexShrink: 0 }} />
                        <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>{loc.hours}</p>
                      </div>
                      <div style={{ marginTop: "0.25rem" }}>
                        <a href={loc.directionsUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "var(--accent-primary)", fontWeight: "600", textDecoration: "none" }}>
                          Get Directions <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                  {index < headOffices.length - 1 && (
                    <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "1.5rem 0" }} />
                  )}
                </div>
              ))}
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

        </div>
      </div>

      {/* Separate Form Section */}
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 2rem 6rem" }}>
        <div style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "2.5rem 3rem", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "700", color: "#111827", marginBottom: "1rem", textAlign: "center" }}>Send us a message</h2>
          <p style={{ color: "#6b7280", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "2rem", textAlign: "center" }}>
            Have questions about our solutions? Fill out the form below and we'll get back to you shortly.
          </p>
          <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }} onSubmit={(e) => e.preventDefault()}>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                <label htmlFor="name" style={{ fontSize: "0.85rem", color: "#6b7280", fontWeight: "500" }}>Name</label>
                <input type="text" id="name" style={{ padding: "0.5rem 0", border: "none", borderBottom: "1px solid #e5e7eb", backgroundColor: "transparent", outline: "none", fontSize: "0.95rem", color: "#111827" }} placeholder="John Doe" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                <label htmlFor="company" style={{ fontSize: "0.85rem", color: "#6b7280", fontWeight: "500" }}>Company</label>
                <input type="text" id="company" style={{ padding: "0.5rem 0", border: "none", borderBottom: "1px solid #e5e7eb", backgroundColor: "transparent", outline: "none", fontSize: "0.95rem", color: "#111827" }} placeholder="Your Company" />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                <label htmlFor="phone" style={{ fontSize: "0.85rem", color: "#6b7280", fontWeight: "500" }}>Phone</label>
                <input type="tel" id="phone" style={{ padding: "0.5rem 0", border: "none", borderBottom: "1px solid #e5e7eb", backgroundColor: "transparent", outline: "none", fontSize: "0.95rem", color: "#111827" }} placeholder="+91 00000 00000" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                <label htmlFor="email" style={{ fontSize: "0.85rem", color: "#6b7280", fontWeight: "500" }}>Email</label>
                <input type="email" id="email" style={{ padding: "0.5rem 0", border: "none", borderBottom: "1px solid #e5e7eb", backgroundColor: "transparent", outline: "none", fontSize: "0.95rem", color: "#111827" }} placeholder="john@example.com" />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <label htmlFor="subject" style={{ fontSize: "0.85rem", color: "#6b7280", fontWeight: "500" }}>Subject</label>
              <select id="subject" style={{ padding: "0.5rem 0", border: "none", borderBottom: "1px solid #e5e7eb", backgroundColor: "transparent", outline: "none", fontSize: "0.95rem", color: "#111827", cursor: "pointer" }} defaultValue="">
                <option value="" disabled>Select a subject...</option>
                <option value="inquiry">General Inquiry</option>
                <option value="project">Project Proposal</option>
                <option value="support">Support</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <label htmlFor="message" style={{ fontSize: "0.85rem", color: "#6b7280", fontWeight: "500" }}>Message</label>
              <textarea id="message" rows={3} style={{ padding: "0.5rem 0", border: "none", borderBottom: "1px solid #e5e7eb", backgroundColor: "transparent", outline: "none", fontSize: "0.95rem", color: "#111827", resize: "vertical" }} placeholder="Write your message here..."></textarea>
            </div>

            <button type="submit" style={{ marginTop: "1rem", backgroundColor: "var(--accent-primary)", color: "white", border: "none", borderRadius: "8px", padding: "0.85rem", fontSize: "1rem", fontWeight: "600", cursor: "pointer", transition: "background-color 0.2s" }} onMouseOver={e => e.currentTarget.style.backgroundColor = "var(--accent-hover)"} onMouseOut={e => e.currentTarget.style.backgroundColor = "var(--accent-primary)"}>
              Send Message
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}

