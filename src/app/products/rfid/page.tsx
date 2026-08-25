import { Wifi, Scan, Database, Boxes } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "RFID Technology & Systems | Loyal String",
  description: "Advanced RFID readers, tags, and inventory tracking systems.",
};

export default function RFIDPage() {
  const theme = {
    bg: "bg-blue-50",
    text: "text-blue-600",
    gradient: "from-blue-600 to-blue-800",
    btn: "bg-blue-600 hover:bg-blue-700"
  };

  const capabilities = [
    {
      title: "Handheld Readers",
      desc: "Ergonomic, high-range portable RFID guns for rapid cycle counting, inventory audits, and locating specific items on the floor.",
      icon: <Scan size={28} className={theme.text} />
    },
    {
      title: "Fixed Portal Systems",
      desc: "Automated RFID gateways designed for dock doors and transition points to track movement without human intervention.",
      icon: <Wifi size={28} className={theme.text} />
    },
    {
      title: "Smart Labels & Tags",
      desc: "A comprehensive range of passive and active RFID tags, including printable labels, rugged industrial tags, and mount-on-metal variations.",
      icon: <Boxes size={28} className={theme.text} />
    },
    {
      title: "Middleware Integration",
      desc: "Powerful software interfaces that seamlessly translate raw RFID reads into actionable data for your ERP or WMS platforms.",
      icon: <Database size={28} className={theme.text} />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Banner / Hero Section */}
      <section className="relative w-full h-[250px] lg:h-[300px] flex flex-col justify-center items-center text-center">
        <img 
          src="/images/products/rfid.jpg" 
          alt="RFID Systems" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-900/75 z-10"></div>
        
        <div className="relative z-20 max-w-4xl mx-auto px-6 mt-8">
          <div className="flex justify-center mb-6">
            <div className={`w-16 h-16 rounded-2xl ${theme.bg} flex items-center justify-center shadow-lg`}>
              <Wifi size={32} className={theme.text} />
            </div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            RFID Systems
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 font-medium leading-relaxed">
            Advanced inventory tracking and supply chain visibility.
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
              Transform your operational efficiency with our enterprise-grade Radio Frequency Identification (RFID) systems. From high-volume retail environments to rugged industrial warehouses, our end-to-end RFID hardware and tags provide near-100% inventory accuracy, enabling real-time visibility and dramatically reducing manual labor.
            </p>
            <Link href="/contact" className={`${theme.btn} text-white font-bold py-3 px-8 rounded-md transition-all shadow-md hover:shadow-lg hover:-translate-y-1 inline-block`}>
              Request a Quote
            </Link>
          </div>

          <div>
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Core Components</h2>
              <p className="text-slate-600 text-lg max-w-3xl">
                Explore the hardware that makes up our RFID ecosystem.
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
