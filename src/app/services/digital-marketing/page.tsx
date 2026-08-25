import { ArrowRight, TrendingUp, Megaphone, Share2, Search, Target } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Digital Marketing | Loyal String",
  description: "Data-driven digital marketing campaigns to elevate your brand.",
};

export default function DigitalMarketingPage() {
  const theme = {
    bg: "bg-blue-50",
    text: "text-blue-600",
    gradient: "from-blue-600 to-blue-800",
    btn: "bg-blue-600 hover:bg-blue-700"
  };

  const capabilities = [
    {
      title: "Social Media Strategy",
      desc: "Engaging, data-driven content strategies across platforms to build brand awareness and loyalty.",
      icon: <Share2 size={28} className={theme.text} />
    },
    {
      title: "Performance Marketing (PPC)",
      desc: "Highly targeted ad campaigns on Google, Facebook, and LinkedIn designed to maximize ROI.",
      icon: <Target size={28} className={theme.text} />
    },
    {
      title: "Content Marketing",
      desc: "High-quality, authoritative content creation that engages your target audience and drives organic growth.",
      icon: <Megaphone size={28} className={theme.text} />
    },
    {
      title: "Conversion Optimization",
      desc: "Continuous A/B testing and landing page optimization to turn your traffic into qualified leads.",
      icon: <TrendingUp size={28} className={theme.text} />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Banner / Hero Section */}
      <section className="relative w-full h-[250px] lg:h-[300px] flex flex-col justify-center items-center text-center">
        <img 
          src="/images/services/digital-marketing.jpg" 
          alt="Digital Marketing" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-900/75 z-10"></div>
        
        <div className="relative z-20 max-w-4xl mx-auto px-6 mt-8">
          <div className="flex justify-center mb-6">
            <div className={`w-16 h-16 rounded-2xl ${theme.bg} flex items-center justify-center shadow-lg`}>
              <TrendingUp size={32} className={theme.text} />
            </div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Digital Marketing
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 font-medium leading-relaxed">
            Data-driven campaigns to elevate your brand.
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
              Connect with your ideal audience through precision-targeted advertising, engaging social media management, and data-driven marketing strategies that translate into measurable ROI and brand growth. We combine creative execution with rigorous analytics to ensure every dollar you spend delivers a return.
            </p>
            <Link href="/contact" className={`${theme.btn} text-white font-bold py-3 px-8 rounded-md transition-all shadow-md hover:shadow-lg hover:-translate-y-1 inline-block`}>
              Start Your Campaign
            </Link>
          </div>

          <div>
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Core Strategies</h2>
              <p className="text-slate-600 text-lg max-w-3xl">
                Explore the specific tactics we use to scale your business online.
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
