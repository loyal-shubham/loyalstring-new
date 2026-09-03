import { Wifi, Scan, Database, Boxes } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "RFID Technology & Systems | Loyal String",
  description: "Advanced RFID readers, tags, and inventory tracking systems.",
};

export default function RFIDPage() {
  const theme = {
    btn: "bg-slate-900 hover:bg-slate-800 text-white"
  };

  const capabilities = [
    {
      title: "Handheld Readers",
      desc: "Ergonomic, high-range portable RFID guns for rapid cycle counting, inventory audits, and locating specific items on the floor.",
      icon: <Scan size={22} />
    },
    {
      title: "Fixed Portal Systems",
      desc: "RFID gateways for robotics and automation at dock doors and transition points, tracking movement without human intervention.",
      icon: <Wifi size={22} />
    },
    {
      title: "Smart Labels & Tags",
      desc: "A comprehensive range of passive and active RFID tags, including printable labels, rugged industrial tags, and mount-on-metal variations.",
      icon: <Boxes size={22} />
    },
    {
      title: "Middleware Integration",
      desc: "Powerful software interfaces that seamlessly translate raw RFID reads into actionable data for your ERP or WMS platforms.",
      icon: <Database size={22} />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Banner / Hero Section */}
      <section className="relative w-full h-[300px] lg:h-[350px] flex flex-col justify-center items-center text-center">
        <img 
          src="/images/products/rfid.jpg" 
          alt="RFID Systems" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-900/80 z-10"></div>
        
        <div className="relative z-20 max-w-4xl mx-auto px-6 mt-4">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
            RFID Systems
          </h1>
          <p className="text-lg text-slate-200 font-medium max-w-2xl mx-auto">
            Advanced inventory tracking and supply chain visibility.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-16 relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          
          <div className="max-w-3xl mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Product Overview</h2>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Transform your operational efficiency with our enterprise-grade Radio Frequency Identification (RFID) systems. From high-volume retail environments to rugged industrial warehouses, our end-to-end RFID hardware and tags provide near-100% inventory accuracy, enabling real-time visibility and dramatically reducing manual labor.
            </p>
            <Link href="/contact" className={`${theme.btn} font-semibold py-2.5 px-6 rounded transition-all text-sm inline-block`}>
              Request a Quote
            </Link>
          </div>

          <div>
            <div className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Core Components</h2>
              <p className="text-slate-500 text-sm">
                Explore the hardware that makes up our RFID ecosystem.
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
