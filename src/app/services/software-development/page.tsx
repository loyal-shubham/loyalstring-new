import { ArrowRight, MonitorSmartphone, Code, Database, Smartphone, Cloud, Cpu, Server, Network } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Software Development | Loyal String",
  description: "Custom enterprise software and robust applications tailored to your business needs.",
};

export default function SoftwareDevelopmentPage() {
  const theme = {
    bg: "bg-blue-50",
    text: "text-blue-600",
    gradient: "from-blue-600 to-blue-800",
    btn: "bg-blue-600 hover:bg-blue-700"
  };

  const capabilities = [
    {
      title: "Enterprise Web Applications",
      desc: "Scalable, secure web platforms built with React, Next.js, and robust Node.js/Python backends.",
      icon: <MonitorSmartphone size={28} className={theme.text} />
    },
    {
      title: "Mobile App Development",
      desc: "Native and cross-platform mobile apps for iOS and Android using React Native and Flutter.",
      icon: <Smartphone size={28} className={theme.text} />
    },
    {
      title: "Artificial Intelligence & ML",
      desc: "Integrating predictive analytics, NLP, and intelligent robotics and automation into your existing workflows.",
      icon: <Cpu size={28} className={theme.text} />
    },
    {
      title: "Cloud & Microservices",
      desc: "AWS/Azure cloud architecture, Docker/Kubernetes containerization, and DevOps CI/CD pipelines.",
      icon: <Cloud size={28} className={theme.text} />
    },
    {
      title: "Database Architecture",
      desc: "High-performance database design (PostgreSQL, MongoDB), optimization, and data migration.",
      icon: <Database size={28} className={theme.text} />
    },
    {
      title: "IoT Solutions",
      desc: "Connecting devices and sensors with robust backend systems for real-time data processing.",
      icon: <Network size={28} className={theme.text} />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Banner / Hero Section */}
      <section className="relative w-full h-[250px] lg:h-[300px] flex flex-col justify-center items-center text-center">
        <img
          src="/images/services/software-development.jpg"
          alt="Software Development"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-900/75 z-10"></div>

        <div className="relative z-20 max-w-4xl mx-auto px-6 mt-8">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Software Development
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 font-medium leading-relaxed">
            Custom enterprise software and robust applications.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12">

          <div className="max-w-4xl mb-24">
            <div className="flex items-center gap-4 mb-6">
              {/* <div className="w-10 h-0.5 bg-blue-600"></div> */}
              <h2 className="text-3xl font-bold text-slate-900">Service Overview</h2>
            </div>
            <p className="text-slate-600 text-base leading-relaxed mb-10 max-w-4xl">
              We engineer highly scalable, secure, and intuitive software solutions leveraging the latest technologies. From modernizing legacy applications to building complex AI-driven platforms from scratch, our development team ensures top-tier performance tailored to your specific business needs. We employ an Agile methodology to ensure rapid delivery without compromising on quality or security.
            </p>
            <div className="flex gap-3 sm:gap-4 w-full max-w-[400px] sm:max-w-none mx-auto sm:mx-0">
              <Link href="/contact" className="flex-1 sm:flex-none flex items-center justify-center text-center bg-blue-600 text-white font-semibold py-3 sm:py-2.5 px-4 sm:px-8 rounded-md hover:bg-blue-700 transition-colors text-[0.95rem] sm:text-base leading-[1.2]">
                <span>Contact<br className="sm:hidden" /> Sales</span>
              </Link>
              <button className="flex-1 sm:flex-none flex items-center justify-center text-center bg-white border border-slate-200 text-[#1e293b] font-semibold py-3 sm:py-2.5 px-4 sm:px-8 rounded-md hover:bg-slate-50 transition-colors text-[0.95rem] sm:text-base leading-[1.2]">
                <span>Download<br className="sm:hidden" /> Brochure</span>
              </button>
            </div>
          </div>

          <div>
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Technical Capabilities</h2>
              <p className="text-slate-600 text-lg max-w-3xl">
                Explore the specific technologies and solutions we deliver within our Software Development division.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {capabilities.map((cap, i) => (
                <div key={i} className="flex flex-col gap-5 items-start group">
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
