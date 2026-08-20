import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import InteractiveSolutions from '@/components/InteractiveSolutions';

// Dummy data for the specific industries
const industryData = {
  retailer: {
    title: "RFID Solutions for Retailers",
    subtitle: "Automate inventory, stop shrinkage, and enhance the customer experience.",
    description: "Our comprehensive retail solutions bring complete visibility to your supply chain, from the distribution center to the sales floor. Empower your staff and delight your customers with real-time stock data.",
    solutions: [
      { name: "Jewellery Tracking", detail: "Precision item-level tracking, real-time audit capabilities, and high-end security for valuable assets. Ensure your premium items are always accounted for.", href: "https://sparklerfid.com", image: "/images/jewellery_rfid_card.png" },
      { name: "Garment Management", detail: "Fast bulk scanning, dynamic stock optimization, and smooth omnichannel order fulfillment. Keep your shelves stocked with the right sizes at all times.", href: "/industries/retailer/garments", image: "/images/garment_rfid_card.png" },
      { name: "EAS Loss Prevention", detail: "Advanced loss prevention gates and hard tags tailored for high-traffic retail environments to virtually eliminate retail shrinkage.", href: "/industries/retailer/eas", image: "/images/eas_rfid_card.png" }
    ],
    image: "/images/retail_rfid.png"
  },
  warehousing: {
    title: "Smart Warehousing & Logistics",
    subtitle: "Precision cargo tracking and end-to-end supply chain visibility.",
    description: "Transform your logistics operations with automated data capture. Eliminate manual scanning errors, speed up cross-dock transfers, and maintain a real-time ledger of your entire inventory.",
    solutions: [
      { name: "Cross-Dock Transfers", detail: "Automatically log cargo quantity and destination at the dock door, drastically reducing manual processing time." },
      { name: "Production Line Automation", detail: "Component tracking, workflow automation, and quality compliance for defect tracing right on the assembly line." },
      { name: "Forklift Tracking", detail: "Equip your forklifts with RFID readers to automatically update stock locations as pallets are moved." },
      { name: "Pallet Localization", detail: "Instantly locate specific pallets in massive warehouses using precision zonal tracking." }
    ],
    image: "/images/warehouse_rfid.png"
  },
  medical: {
    title: "Medical Asset Tracking",
    subtitle: "Medical-grade tracking for critical hospital assets.",
    description: "Ensure patient safety and operational efficiency by tracking high-value medical equipment. Reduce time wasted searching for devices and maintain strict compliance with automated audit trails.",
    solutions: [
      { name: "Equipment Localization", detail: "Instantly locate high-value medical devices across vast hospital wings, ensuring life-saving tools are always at hand." },
      { name: "Inventory Management", detail: "Automate the tracking of medical supplies, pharmaceuticals, and disposables to prevent stock-outs." },
      { name: "Compliance Monitoring", detail: "Maintain airtight electronic logs of equipment sterilization cycles and maintenance schedules for regulatory compliance." },
      { name: "Patient Tracking", detail: "Secure, non-intrusive wristbands that help monitor patient flow and reduce wait times in emergency rooms." }
    ],
    image: "/images/medical_rfid.png"
  },
  library: {
    title: "Intelligent Library Systems",
    subtitle: "Automated cataloging and self-checkout for modern libraries.",
    description: "Streamline library operations with intelligent RFID systems. Allow patrons to instantly borrow multiple books, secure your collection with anti-theft gates, and automate inventory audits.",
    solutions: [
      { name: "Automated Checkout Kiosks", detail: "Allow patrons to borrow multiple books instantly in a single scan, reducing queues and staff workload." },
      { name: "Smart Return Drops", detail: "Automated return bins that instantly check-in items and sort them for fast re-shelving." },
      { name: "Anti-theft Security Gates", detail: "Discreet but powerful gates that detect un-checked out items without false alarms." },
      { name: "Handheld Inventory Scanners", detail: "Enable staff to audit entire bookshelves in seconds simply by waving a reader past the spines." }
    ],
    image: "/images/library_rfid.png"
  }
};

export default async function IndustryPage({ params }: { params: Promise<{ industry: string }> }) {
  const resolvedParams = await params;
  const data = industryData[resolvedParams.industry as keyof typeof industryData];

  if (!data) {
    notFound();
  }

  return (
    <div className="pt-8 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <Link href="/" className="inline-flex items-center text-slate-500 font-semibold hover:text-slate-900 mb-8 transition-colors">
          <ArrowRight className="rotate-180 mr-2" size={20} />
          Back to Home
        </Link>
        
        <div className="bg-white rounded-[2.5rem] p-8 lg:p-16 shadow-sm border border-slate-100 mb-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                {data.title}
              </h1>
              <p className="text-xl text-blue-600 font-bold mb-8">
                {data.subtitle}
              </p>
              <p className="text-slate-600 text-[1.1rem] leading-[1.8] mb-10">
                {data.description}
              </p>
              
              <div className="flex gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                  Contact Sales
                </button>
                <button className="bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-bold py-4 px-10 rounded-xl transition-all">
                  Download Brochure
                </button>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl relative aspect-[4/3]">
                <img src={data.image} alt={data.title} className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </div>
          
          <div className="mt-20 border-t border-slate-100 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Explore Our Solutions</h2>
              <p className="text-slate-600 text-lg">Click through the categories below to learn exactly how we can optimize your operations.</p>
            </div>
            
            {/* Interactive Solutions UI or Cards */}
            {resolvedParams.industry === 'retailer' ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {data.solutions.map((sol: any, i: number) => (
                  <Link 
                    key={i} 
                    href={sol.href} 
                    target={sol.href.startsWith('http') ? '_blank' : '_self'}
                    className="bg-white border border-slate-100 rounded-3xl overflow-hidden hover:bg-blue-600 hover:text-white transition-all group shadow-md hover:shadow-2xl hover:-translate-y-2 flex flex-col"
                  >
                    <div className="w-full h-48 sm:h-56 overflow-hidden relative">
                      <img src={sol.image} alt={sol.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-white">{sol.name}</h3>
                      <p className="text-slate-600 group-hover:text-blue-100 text-[0.95rem] leading-relaxed mb-6 flex-grow">{sol.detail}</p>
                      <div className="mt-auto flex items-center text-blue-600 font-semibold group-hover:text-white">
                        Explore <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <InteractiveSolutions solutions={data.solutions} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
