import { Monitor, Server, Printer, Scan } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Enterprise Hardware | Loyal String",
  description: "POS terminals, barcode scanners, and enterprise IT hardware.",
};

export default function HardwarePage() {
  const theme = {
    btn: "bg-slate-900 hover:bg-slate-800 text-white"
  };

  const capabilities = [
    {
      title: "POS Terminals",
      desc: "Sleek, high-performance touchscreen Point of Sale systems built to handle high transaction volumes with zero lag.",
      icon: <Monitor size={22} />
    },
    {
      title: "Barcode Scanners",
      desc: "Rugged 1D/2D wireless and corded barcode scanners designed for rapid checkout and durable warehouse use.",
      icon: <Scan size={22} />
    },
    {
      title: "Thermal Printers",
      desc: "Fast, reliable receipt and label printers that integrate seamlessly with your existing infrastructure.",
      icon: <Printer size={22} />
    },
    {
      title: "Enterprise Networking",
      desc: "Robust routers, switches, and edge servers to keep your retail and warehouse operations securely connected 24/7.",
      icon: <Server size={22} />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Banner / Hero Section */}
      <section className="relative w-full h-[300px] lg:h-[350px] flex flex-col justify-center items-center text-center">
        <img 
          src="/images/products/hardware.jpg" 
          alt="Enterprise Hardware" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-900/80 z-10"></div>
        
        <div className="relative z-20 max-w-4xl mx-auto px-6 mt-4">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
            Enterprise Hardware
          </h1>
          <p className="text-lg text-slate-200 font-medium max-w-2xl mx-auto">
            Robust IT solutions for retail and logistics.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-16 relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          
          <div className="max-w-3xl mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Product Overview</h2>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Equip your workforce with hardware designed to withstand the rigors of fast-paced enterprise environments. From elegant POS systems that enhance the customer checkout experience to ruggedized scanners and networking gear built for the warehouse floor, our hardware portfolio ensures maximum uptime and operational efficiency.
            </p>
            <Link href="/contact" className={`${theme.btn} font-semibold py-2.5 px-6 rounded transition-all text-sm inline-block`}>
              Request a Quote
            </Link>
          </div>

          <div>
            <div className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Core Components</h2>
              <p className="text-slate-500 text-sm">
                Explore the hardware that powers modern business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {capabilities.map((cap, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="mt-1 text-slate-400">
                    {cap.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-800 mb-1">{cap.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
