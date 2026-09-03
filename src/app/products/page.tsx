import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Products | Loyal String International",
  description: "Browse our premium range of RFID tags and RFID guns designed for global enterprise use.",
};

export default function ProductsPage() {
  return (
    <div className="section container">
      <div className="section-header text-center" style={{ marginBottom: "4rem" }}>
        <h1 className="heading-1">Our Products</h1>
        <p className="text-lead" style={{ maxWidth: "600px", margin: "1rem auto 0" }}>
          Engineered for precision and durability. Explore our comprehensive suite of RFID hardware designed for tracking, inventory, and security.
        </p>
      </div>

      <div style={{ marginBottom: "4rem" }}>
        <h2 className="heading-2" style={{ marginBottom: "2rem" }}>RFID Guns & Readers</h2>
        <div className="products-grid">
          <ProductCard 
            title="ProScan Handheld X1" 
            description="High-performance handheld reader with an extended 15m read range and ergonomic design for warehouse operations."
            type="gun"
          />
          <ProductCard 
            title="Compact Mobile Reader 2.0" 
            description="Lightweight Bluetooth-enabled RFID gun that pairs seamlessly with mobile devices for retail environments."
            type="gun"
          />
          <ProductCard 
            title="Fixed Portal Scanner System" 
            description="Gateway scanners for robotics and automation at dock doors, tracking movement without manual intervention."
            type="system"
          />
        </div>
      </div>

      <div>
        <h2 className="heading-2" style={{ marginBottom: "2rem" }}>RFID Tags & Labels</h2>
        <div className="products-grid">
          <ProductCard 
            title="Titanium Mount-on-Metal Tags" 
            description="Ultra-rugged tags specifically engineered to perform flawlessly on metal surfaces in harsh industrial environments."
            type="tag"
          />
          <ProductCard 
            title="Flexible Retail Smart Labels" 
            description="Printable, self-adhesive RFID labels optimized for high-volume consumer goods and apparel tracking."
            type="tag"
          />
          <ProductCard 
            title="High-Temp Ceramic Tags" 
            description="Specialized tags capable of withstanding extreme temperatures and chemical exposure during manufacturing."
            type="tag"
          />
        </div>
      </div>
    </div>
  );
}
