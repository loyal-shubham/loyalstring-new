export const metadata = {
  title: "About Us | Loyal String International",
  description: "Learn about Loyal String International Pvt. Ltd. and our global mission to revolutionize RFID technology.",
};

export default function AboutPage() {
  return (
    <div className="section container">
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 className="heading-1" style={{ marginBottom: "2rem" }}>About Loyal String</h1>
        
        <div className="glass-card" style={{ padding: "3rem", marginBottom: "3rem" }}>
          <h2 className="heading-3" style={{ marginBottom: "1rem" }}>Our Mission</h2>
          <p className="text-lead" style={{ marginBottom: "0", color: "var(--text-primary)" }}>
            At Loyal String International Pvt. Ltd., our mission is to empower businesses globally through innovative, reliable, and cutting-edge RFID hardware solutions.
          </p>
        </div>

        <div style={{ display: "grid", gap: "2rem", marginBottom: "3rem" }}>
          <div>
            <h2 className="heading-2" style={{ marginBottom: "1rem" }}>Global Manufacturing</h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: "1.8", fontSize: "1.1rem" }}>
              Based in India with a global footprint, we specialize in the manufacturing of high-quality RFID tags and handheld RFID guns. Our state-of-the-art production facilities ensure that every component meets rigorous international standards for precision and durability.
            </p>
          </div>

          <div>
            <h2 className="heading-2" style={{ marginBottom: "1rem" }}>Why Choose Us?</h2>
            <ul style={{ color: "var(--text-secondary)", lineHeight: "1.8", fontSize: "1.1rem", paddingLeft: "1.5rem", listStyleType: "disc" }}>
              <li><strong>End-to-End Solutions:</strong> From customizable RFID labels to rugged industrial tags and powerful readers.</li>
              <li><strong>Uncompromised Quality:</strong> Rigorous testing ensures maximum read range and accuracy in real-world environments.</li>
              <li><strong>Global Distribution:</strong> We seamlessly supply enterprises, retail chains, and industrial sectors across the world.</li>
              <li><strong>Continuous Innovation:</strong> Our R&D team is constantly pushing the boundaries of what RFID tech can achieve.</li>
            </ul>
          </div>
        </div>

        <div className="glass-card text-center" style={{ padding: "3rem", background: "rgba(59, 130, 246, 0.05)", border: "1px solid rgba(59, 130, 246, 0.2)" }}>
          <h2 className="heading-2" style={{ marginBottom: "1rem" }}>Partner with us today</h2>
          <p className="text-lead" style={{ marginBottom: "2rem" }}>Let's build the future of tracking and security together.</p>
          <a href="/contact" className="btn btn-primary">Contact Our Team</a>
        </div>
      </div>
    </div>
  );
}
