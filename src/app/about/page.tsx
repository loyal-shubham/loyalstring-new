import Link from 'next/link';
import Image from 'next/image';
import { Target, Rocket, Eye, Lightbulb, Quote, ChevronRight } from 'lucide-react';

export const metadata = {
  title: "About Us | Loyal String International",
  description: "India's No.1 EAS Brand and Manufacturer of EAS equipments, RFID solutions, and Software development.",
};

const aboutData = {
  heroText: "India's No.1 EAS Brand. We are the first and largest manufacturer of EAS equipments in INDIA. We have expertise in Electronic Article Surveillance Systems, RFID solutions, and Software development. We like competition and competitors to extract the best out of us, coming up with the most exciting and interesting solutions in wireless technology which will be a game changer across the industry.",
  coreValues: [
    {
      title: "Our Mission",
      description: "To make RFID and EAS so much affordable so every retailer can use the RFID and EAS System.",
      icon: <Target size={32} strokeWidth={1.5} />
    },
    {
      title: "Vision 2026",
      description: "To become the No.1 Electronic Article Surveillance company in the world with innovative technology.",
      icon: <Eye size={32} strokeWidth={1.5} />
    },
    {
      title: "Vision 2027",
      description: "To pioneer AI-driven tracking ecosystems and achieve zero-loss inventory solutions for global enterprise partners.",
      icon: <Rocket size={32} strokeWidth={1.5} />
    },
    {
      title: "Innovation",
      description: "To focus on new technology and new manufacturing techniques in EAS, UHF and 2.4 Ghz RFID.",
      icon: <Lightbulb size={32} strokeWidth={1.5} />
    }
  ],
  journey: [
    {
      year: "2022",
      title: "India's First Detacher",
      description: "Manufactured export quality EAS Magnetic detacher from 4000 GS to 14000 GS to unlock EAS security tags."
    },
    {
      year: "2020",
      title: "E-Store Launched",
      description: "Buy everything online with our transparent pricing across India. One single store to address all your EAS, RFID and Software needs."
    },
    {
      year: "2019",
      title: "Best EAS in the world",
      description: "Manufactured world's best EAS Machines. The only company in the world to have data technology with EAS, serving critical clients like the Indian Navy and International Airports."
    },
    {
      year: "2015",
      title: "Import of RFID and EAS",
      description: "Started import from China and USA of RFID and EAS devices. Began modifications in hardware and software to match exact customer requirements."
    },
    {
      year: "2013",
      title: "Best Jewellery Software",
      description: "Became popular in the Jewellery Industry for our Jewellery and Money Lending Softwares. From Extreme Jewellsoft to GOLDMCX.com."
    },
    {
      year: "2011",
      title: "Established",
      description: "Started our journey with website design and software development for Bayberry Pharmaceuticals Private Limited, computerizing all their business processes successfully."
    }
  ],
  founderMessage: {
    quote: "\"Building String of Happy Customers !! The conviction begins with 'To develop No. 1 Product in the world or the unique one' capability of Innovation and Implementation is our strength. Our Ethics, principles and 'Customer is God' approach lead the organization to next level. Never give up attitude and acceptance of failures gives enormous confidence and strength in the team members which leads to create and achieve world class solutions. We are encouraging business owners to join our hands and we will take shared responsibility to grow and secure your business.\"",
    author: "- Rahul Thakare, Founder and CEO"
  }
};

export default function AboutPage() {
  return (
    <div style={{ animation: "fadeIn var(--transition-normal)" }}>
      {/* Banner Section with Dark Overlay */}
      <div style={{ width: "100%", height: "450px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <Image 
          src="/about_banner_abstract.jpg" 
          alt="About Loyal String" 
          fill
          style={{ objectFit: "cover", zIndex: 0 }}
          priority
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(10, 37, 64, 0.7)", zIndex: 1 }}></div>
        
        <div style={{ position: "relative", zIndex: 2, padding: "0 2rem", marginTop: "-50px" }}>
          <h1 style={{ color: "#ffffff", fontSize: "3rem", fontWeight: "700", marginBottom: "1.5rem" }}>About Loyal String</h1>
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.15rem", maxWidth: "900px", margin: "0 auto", lineHeight: "1.8" }}>
            {aboutData.heroText}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="section container" style={{ marginTop: "4rem" }}>
        <div style={{ width: "100%", margin: "0 auto", paddingBottom: "4rem" }}>
          
          {/* Core Values Section */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "4rem", marginBottom: "8rem" }}>
            {aboutData.coreValues.map((item, index) => (
              <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <div style={{ marginBottom: "1.5rem", color: "var(--accent-primary)" }}>
                  {item.icon}
                </div>
                <h2 className="heading-3" style={{ marginBottom: "1rem" }}>{item.title}</h2>
                <p style={{ margin: "0", color: "var(--text-secondary)", lineHeight: "1.8" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Journey Section (Minimal Timeline) */}
          <div style={{ marginBottom: "8rem", maxWidth: "800px", margin: "0 auto" }}>
            <h2 className="heading-2" style={{ marginBottom: "4rem", textAlign: "center" }}>Our Journey</h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {aboutData.journey.map((item, index) => (
                <div key={index} style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
                  <div style={{ minWidth: "80px", textAlign: "right", paddingTop: "0.25rem" }}>
                    <strong style={{ fontSize: "1.25rem", color: "var(--text-primary)", display: "block" }}>{item.year}</strong>
                  </div>
                  <div style={{ width: "2px", backgroundColor: "var(--border-color)", alignSelf: "stretch", position: "relative" }}>
                    <div style={{ position: "absolute", top: "0.6rem", left: "-4px", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "var(--accent-primary)" }}></div>
                  </div>
                  <div style={{ flex: 1, paddingBottom: index !== aboutData.journey.length - 1 ? "4rem" : "0" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }}>{item.title}</h3>
                    <p style={{ color: "var(--text-secondary)", margin: "0", lineHeight: "1.7" }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Founder Message Section */}
          <div style={{ marginBottom: "8rem", maxWidth: "800px", margin: "0 auto", textAlign: "center", position: "relative" }}>
            <Quote size={48} style={{ color: "var(--border-color)", margin: "0 auto 2rem auto", opacity: 0.5 }} />
            <p style={{ fontSize: "1.25rem", fontStyle: "italic", color: "var(--text-secondary)", lineHeight: "1.9", marginBottom: "2.5rem" }}>
              {aboutData.founderMessage.quote}
            </p>
            <p style={{ fontWeight: "600", color: "var(--text-primary)", fontSize: "1.1rem" }}>{aboutData.founderMessage.author}</p>
          </div>

          {/* CTA Section */}
          <div className="text-center" style={{ marginTop: "4rem", padding: "4rem 0", borderTop: "1px solid var(--border-color)" }}>
            <h2 className="heading-2" style={{ marginBottom: "1.5rem" }}>Partner with us today</h2>
            <p style={{ marginBottom: "2.5rem", color: "var(--text-secondary)", fontSize: "1.1rem" }}>Let's build the future of tracking and security together.</p>
            <Link href="/contact" className="btn btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}>
              Contact Our Team <ChevronRight size={20} style={{ marginLeft: "0.5rem" }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
