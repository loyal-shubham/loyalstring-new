import { ShieldAlert, Tag, Unlock, Wifi } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Electronic Article Surveillance (EAS) | Loyal String",
  description: "Premium retail security gates and anti-theft EAS systems.",
};

export default function EASPage() {
  const theme = {
    btn: "bg-slate-900 hover:bg-slate-800 text-white"
  };

  const capabilities = [
    {
      title: "Detection Gates",
      desc: "High-performance security pedestals for retail entrances with slim, aesthetically pleasing designs and ultra-high detection rates.",
      icon: <ShieldAlert size={22} />
    },
    {
      title: "Hard Tags",
      desc: "Reusable, durable security tags in various form factors designed for apparel, accessories, and high-value merchandise.",
      icon: <Tag size={22} />
    },
    {
      title: "Soft Labels",
      desc: "Discreet, adhesive security labels ideal for groceries, cosmetics, and packaged goods where hard tags aren't viable.",
      icon: <Wifi size={22} />
    },
    {
      title: "Deactivators & Detachers",
      desc: "Fast, reliable point-of-sale detachers and label deactivators to ensure seamless customer checkout experiences.",
      icon: <Unlock size={22} />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Banner / Hero Section */}
      <section className="relative w-full h-[300px] lg:h-[350px] flex flex-col justify-center items-center text-center">
        <img 
          src="/images/products/eas.jpg" 
          alt="EAS Systems" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-900/80 z-10"></div>
        
        <div className="relative z-20 max-w-4xl mx-auto px-6 mt-4">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
            EAS Systems
          </h1>
          <p className="text-lg text-slate-200 font-medium max-w-2xl mx-auto">
            Premium retail security gates and anti-theft solutions.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-16 relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          
          <div className="max-w-3xl mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Product Overview</h2>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Protect your bottom line with industry-leading Electronic Article Surveillance (EAS) technology. Our comprehensive security solutions act as a powerful visual deterrent while providing highly accurate theft detection at store exits, ensuring your merchandise stays secure without impacting the customer experience.
            </p>
            <Link href="/contact" className={`${theme.btn} font-semibold py-2.5 px-6 rounded transition-all text-sm inline-block`}>
              Request a Quote
            </Link>
          </div>

          <div className="mb-16">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Core Components</h2>
              <p className="text-slate-500 text-sm">
                Explore the hardware that makes up our EAS security ecosystem.
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

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-6 border-b pb-2 border-slate-100">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div 
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-5 border border-slate-100 rounded-lg bg-slate-50/50 hover:border-slate-300 hover:shadow-sm transition-all"
              >
                <div className="w-24 h-24 bg-white rounded-md flex-shrink-0 flex items-center justify-center overflow-hidden border border-slate-100 p-2">
                  <img src="/product_image/eas/rfid_gate.png" alt="LOYAL STRING AM + RFID GATE" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex flex-col h-full flex-grow items-center sm:items-start text-center sm:text-left">
                  <h3 className="text-slate-800 font-bold text-sm sm:text-base">LOYAL STRING AM + RFID GATE</h3>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1 mb-4">Premium EAS Security System</p>
                  <a 
                    href="https://sparklerfid.com/product/rfid-gate-2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-auto bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold py-2 px-5 rounded transition-colors inline-block"
                  >
                    See Product
                  </a>
                </div>
              </div>
              
              <div 
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-5 border border-slate-100 rounded-lg bg-slate-50/50 hover:border-slate-300 hover:shadow-sm transition-all"
              >
                <div className="w-24 h-24 bg-white rounded-md flex-shrink-0 flex items-center justify-center overflow-hidden border border-slate-100 p-2">
                  <img src="/product_image/eas/ls_rfid_gate.png" alt="LOYAL STRING RFID GATE" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex flex-col h-full flex-grow items-center sm:items-start text-center sm:text-left">
                  <h3 className="text-slate-800 font-bold text-sm sm:text-base">LOYAL STRING RFID GATE</h3>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1 mb-4">Standard Anti-Theft Pedestal</p>
                  <a 
                    href="https://sparklerfid.com/product/rfid-gate-1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-auto bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold py-2 px-5 rounded transition-colors inline-block"
                  >
                    See Product
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
