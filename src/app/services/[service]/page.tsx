import { notFound } from 'next/navigation';
import { ArrowRight, MonitorSmartphone, TrendingUp, BarChart, Briefcase, Check } from 'lucide-react';
import Link from 'next/link';

const icons = {
  'software-development': MonitorSmartphone,
  'digital-marketing': TrendingUp,
  'seo': BarChart,
  'business-consulting': Briefcase,
};

const serviceData = {
  'software-development': {
    title: "Software Development",
    subtitle: "Custom enterprise software and robust applications.",
    description: "We engineer highly scalable, secure, and intuitive software solutions. From mobile applications to complex enterprise resource planning systems, our development team ensures top-tier performance tailored to your specific business needs.",
    color: "purple",
    features: [
      "Custom Enterprise Applications",
      "Mobile App Development (iOS & Android)",
      "Web Application Development",
      "API Integration & Development",
      "Cloud Infrastructure Setup"
    ]
  },
  'digital-marketing': {
    title: "Digital Marketing",
    subtitle: "Data-driven campaigns to elevate your brand.",
    description: "Connect with your ideal audience through precision-targeted advertising, engaging social media management, and data-driven marketing strategies that translate into measurable ROI and brand growth.",
    color: "blue",
    features: [
      "Social Media Management",
      "Pay-Per-Click (PPC) Campaigns",
      "Content Marketing & Strategy",
      "Email Marketing Automation",
      "Conversion Rate Optimization"
    ]
  },
  'seo': {
    title: "Search Engine Optimization",
    subtitle: "Dominate search rankings and drive organic traffic.",
    description: "Our comprehensive SEO strategies cover technical, on-page, and off-page optimization. We ensure your business is easily discoverable by high-intent users, driving sustainable organic growth.",
    color: "pink",
    features: [
      "Technical SEO Audits",
      "On-Page Optimization",
      "Link Building Strategies",
      "Local SEO & Google My Business",
      "Keyword Research & Tracking"
    ]
  },
  'business-consulting': {
    title: "Business Consulting",
    subtitle: "Strategic guidance for long-term growth.",
    description: "Leverage our expert consulting services to streamline your operations, integrate cutting-edge technologies, and formulate robust roadmaps that future-proof your business in a competitive market.",
    color: "indigo",
    features: [
      "Digital Transformation Strategy",
      "Operational Workflow Optimization",
      "Technology Stack Assessment",
      "Go-to-Market Strategy",
      "Business Process Automation"
    ]
  }
};

const colorMap = {
  purple: {
    bg: "bg-purple-50",
    text: "text-purple-600",
    border: "border-purple-100",
    gradient: "from-purple-600 to-indigo-600",
    btn: "bg-purple-600 hover:bg-purple-700"
  },
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-100",
    gradient: "from-blue-600 to-cyan-600",
    btn: "bg-blue-600 hover:bg-blue-700"
  },
  pink: {
    bg: "bg-pink-50",
    text: "text-pink-600",
    border: "border-pink-100",
    gradient: "from-pink-600 to-rose-600",
    btn: "bg-pink-600 hover:bg-pink-700"
  },
  indigo: {
    bg: "bg-indigo-50",
    text: "text-indigo-600",
    border: "border-indigo-100",
    gradient: "from-indigo-600 to-blue-600",
    btn: "bg-indigo-600 hover:bg-indigo-700"
  }
};

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const resolvedParams = await params;
  const data = serviceData[resolvedParams.service as keyof typeof serviceData];
  const Icon = icons[resolvedParams.service as keyof typeof icons];

  if (!data) {
    notFound();
  }

  const theme = colorMap[data.color as keyof typeof colorMap];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Banner / Hero Section */}
      <section className={`relative w-full pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-900`}>
        {/* Abstract background for banner */}
        <div className={`absolute inset-0 opacity-[0.15] bg-gradient-to-br ${theme.gradient}`}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white rounded-full blur-[100px] opacity-10"></div>
        
        <div className="relative z-10 max-w-[1500px] mx-auto px-6 lg:px-12">
          <Link href="/" className="inline-flex items-center text-white/70 font-semibold hover:text-white mb-10 transition-colors">
            <ArrowRight className="rotate-180 mr-2" size={20} />
            Back to Home
          </Link>
          
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 max-w-3xl">
              <div className={`w-16 h-16 rounded-2xl ${theme.bg} flex items-center justify-center ${theme.text} mb-8 shadow-lg`}>
                <Icon size={32} />
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                {data.title}
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 font-medium leading-relaxed">
                {data.subtitle}
              </p>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative aspect-video">
                <img 
                  src={`/images/services/${resolvedParams.service}.jpg`} 
                  alt={data.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none"></div>
                {/* Subtle gradient overlay to blend image nicely */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${theme.gradient} opacity-20 mix-blend-overlay pointer-events-none`}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
          
          {/* Details / Overview */}
          <div className="max-w-4xl mb-24">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${theme.gradient}`}></div>
              <h2 className="text-3xl font-bold text-slate-900">Service Overview</h2>
            </div>
            <p className="text-slate-600 text-[1.2rem] leading-relaxed mb-10">
              {data.description}
            </p>
            <Link href="/contact" className={`${theme.btn} text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 inline-block`}>
              Start Your Project
            </Link>
          </div>

          {/* Types of Services List */}
          <div>
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Types of Services We Provide</h2>
              <p className="text-slate-600 text-lg max-w-3xl">
                Explore the specific solutions we deliver within our {data.title} division.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {data.features.map((feature, i) => (
                <div key={i} className="bg-white p-8 lg:p-10 rounded-[2rem] border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgb(0,0,0,0.06)] transition-all duration-300 group hover:-translate-y-1">
                  <div className={`w-14 h-14 rounded-2xl ${theme.bg} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                    <Check size={24} className={theme.text} strokeWidth={3} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature}</h3>
                  <p className="text-slate-500 text-[0.95rem] leading-relaxed">
                    Customized strategies and dedicated implementation designed specifically for your unique business requirements.
                  </p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
