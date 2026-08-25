import { ArrowRight, BarChart, Search, Link as LinkIcon, MapPin, Code2 } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "SEO Services | Loyal String",
  description: "Dominate search rankings and drive high-intent organic traffic to your business.",
};

export default function SEOPage() {
  const theme = {
    bg: "bg-blue-50",
    text: "text-blue-600",
    gradient: "from-blue-600 to-blue-800",
    btn: "bg-blue-600 hover:bg-blue-700"
  };

  const capabilities = [
    {
      title: "Technical SEO Audits",
      desc: "Deep-dive analysis of your website's architecture, crawlability, site speed, and structured data.",
      icon: <Code2 size={28} className={theme.text} />
    },
    {
      title: "On-Page Optimization",
      desc: "Optimizing content, meta tags, and internal linking structures to align perfectly with search intent.",
      icon: <Search size={28} className={theme.text} />
    },
    {
      title: "Link Building Strategies",
      desc: "Acquiring high-quality, authoritative backlinks to boost your domain authority and search visibility.",
      icon: <LinkIcon size={28} className={theme.text} />
    },
    {
      title: "Local SEO",
      desc: "Optimizing your Google My Business profile and local citations to dominate geographic searches.",
      icon: <MapPin size={28} className={theme.text} />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Banner / Hero Section */}
      <section className="relative w-full h-[250px] lg:h-[300px] flex flex-col justify-center items-center text-center">
        <img 
          src="/images/services/seo.jpg" 
          alt="SEO Services" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-900/75 z-10"></div>
        
        <div className="relative z-20 max-w-4xl mx-auto px-6 mt-8">
          <div className="flex justify-center mb-6">
            <div className={`w-16 h-16 rounded-2xl ${theme.bg} flex items-center justify-center shadow-lg`}>
              <BarChart size={32} className={theme.text} />
            </div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Search Engine Optimization
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 font-medium leading-relaxed">
            Dominate search rankings and drive organic traffic.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
          
          <div className="max-w-4xl mb-24">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${theme.gradient}`}></div>
              <h2 className="text-3xl font-bold text-slate-900">Service Overview</h2>
            </div>
            <p className="text-slate-600 text-[1.2rem] leading-relaxed mb-10">
              Our comprehensive SEO strategies cover technical, on-page, and off-page optimization. We ensure your business is easily discoverable by high-intent users, driving sustainable organic growth. Instead of chasing short-term algorithm loopholes, we build a robust, future-proof foundation for your digital presence.
            </p>
            <Link href="/contact" className={`${theme.btn} text-white font-bold py-3 px-8 rounded-md transition-all shadow-md hover:shadow-lg hover:-translate-y-1 inline-block`}>
              Start Your Project
            </Link>
          </div>

          <div>
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Core SEO Capabilities</h2>
              <p className="text-slate-600 text-lg max-w-3xl">
                Explore the specific methodologies we use to improve your search visibility.
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
