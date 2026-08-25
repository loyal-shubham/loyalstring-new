import { ShieldAlert, Tag, Unlock, Wifi } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Electronic Article Surveillance (EAS) | Loyal String",
  description: "Premium retail security gates and anti-theft EAS systems.",
};

export default function EASPage() {
  const theme = {
    bg: "bg-blue-50",
    text: "text-blue-600",
    gradient: "from-blue-600 to-blue-800",
    btn: "bg-blue-600 hover:bg-blue-700"
  };

  const capabilities = [
    {
      title: "Detection Gates",
      desc: "High-performance security pedestals for retail entrances with slim, aesthetically pleasing designs and ultra-high detection rates.",
      icon: <ShieldAlert size={28} className={theme.text} />
    },
    {
      title: "Hard Tags",
      desc: "Reusable, durable security tags in various form factors designed for apparel, accessories, and high-value merchandise.",
      icon: <Tag size={28} className={theme.text} />
    },
    {
      title: "Soft Labels",
      desc: "Discreet, adhesive security labels ideal for groceries, cosmetics, and packaged goods where hard tags aren't viable.",
      icon: <Wifi size={28} className={theme.text} />
    },
    {
      title: "Deactivators & Detachers",
      desc: "Fast, reliable point-of-sale detachers and label deactivators to ensure seamless customer checkout experiences.",
      icon: <Unlock size={28} className={theme.text} />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Banner / Hero Section */}
      <section className="relative w-full h-[250px] lg:h-[300px] flex flex-col justify-center items-center text-center">
        <img 
          src="/images/products/eas.jpg" 
          alt="EAS Systems" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-900/75 z-10"></div>
        
        <div className="relative z-20 max-w-4xl mx-auto px-6 mt-8">
          <div className="flex justify-center mb-6">
            <div className={`w-16 h-16 rounded-2xl ${theme.bg} flex items-center justify-center shadow-lg`}>
              <ShieldAlert size={32} className={theme.text} />
            </div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            EAS Systems
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 font-medium leading-relaxed">
            Premium retail security gates and anti-theft solutions.
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
              Protect your bottom line with industry-leading Electronic Article Surveillance (EAS) technology. Our comprehensive security solutions act as a powerful visual deterrent while providing highly accurate theft detection at store exits, ensuring your merchandise stays secure without impacting the customer experience.
            </p>
            <Link href="/contact" className={`${theme.btn} text-white font-bold py-3 px-8 rounded-md transition-all shadow-md hover:shadow-lg hover:-translate-y-1 inline-block`}>
              Request a Quote
            </Link>
          </div>

          <div>
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Core Components</h2>
              <p className="text-slate-600 text-lg max-w-3xl">
                Explore the hardware that makes up our EAS security ecosystem.
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
