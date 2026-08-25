import { Monitor, Server, Printer, Scan } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Enterprise Hardware | Loyal String",
  description: "POS terminals, barcode scanners, and enterprise IT hardware.",
};

export default function HardwarePage() {
  const theme = {
    bg: "bg-blue-50",
    text: "text-blue-600",
    gradient: "from-blue-600 to-blue-800",
    btn: "bg-blue-600 hover:bg-blue-700"
  };

  const capabilities = [
    {
      title: "POS Terminals",
      desc: "Sleek, high-performance touchscreen Point of Sale systems built to handle high transaction volumes with zero lag.",
      icon: <Monitor size={28} className={theme.text} />
    },
    {
      title: "Barcode Scanners",
      desc: "Rugged 1D/2D wireless and corded barcode scanners designed for rapid checkout and durable warehouse use.",
      icon: <Scan size={28} className={theme.text} />
    },
    {
      title: "Thermal Printers",
      desc: "Fast, reliable receipt and label printers that integrate seamlessly with your existing infrastructure.",
      icon: <Printer size={28} className={theme.text} />
    },
    {
      title: "Enterprise Networking",
      desc: "Robust routers, switches, and edge servers to keep your retail and warehouse operations securely connected 24/7.",
      icon: <Server size={28} className={theme.text} />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Banner / Hero Section */}
      <section className="relative w-full h-[250px] lg:h-[300px] flex flex-col justify-center items-center text-center">
        <img 
          src="/images/products/hardware.jpg" 
          alt="Enterprise Hardware" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-900/75 z-10"></div>
        
        <div className="relative z-20 max-w-4xl mx-auto px-6 mt-8">
          <div className="flex justify-center mb-6">
            <div className={`w-16 h-16 rounded-2xl ${theme.bg} flex items-center justify-center shadow-lg`}>
              <Monitor size={32} className={theme.text} />
            </div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Enterprise Hardware
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 font-medium leading-relaxed">
            Robust IT solutions for retail and logistics.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
          
          <div className="max-w-4xl mb-24">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${theme.gradient}`}></div>
              <h2 className="text-3xl font-bold text-slate-900">Product Overview</h2>
            </div>
            <p className="text-slate-600 text-[1.2rem] leading-relaxed mb-10">
              Equip your workforce with hardware designed to withstand the rigors of fast-paced enterprise environments. From elegant POS systems that enhance the customer checkout experience to ruggedized scanners and networking gear built for the warehouse floor, our hardware portfolio ensures maximum uptime and operational efficiency.
            </p>
            <Link href="/contact" className={`${theme.btn} text-white font-bold py-3 px-8 rounded-md transition-all shadow-md hover:shadow-lg hover:-translate-y-1 inline-block`}>
              Request a Quote
            </Link>
          </div>

          <div>
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Core Components</h2>
              <p className="text-slate-600 text-lg max-w-3xl">
                Explore the hardware that powers modern business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {capabilities.map((cap, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-6 items-start group">
                  <div className={`min-w-16 w-16 h-16 rounded-2xl ${theme.bg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                    {cap.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{cap.title}</h3>
                    <p className="text-slate-500 text-[1rem] leading-relaxed">
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
