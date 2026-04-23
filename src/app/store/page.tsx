import Link from "next/link";

export default function Store() {
  const templates = [
    { title: "Exec Sales Dashboard", category: "Sales", price: "$49", type: "PBIX Template", img: "bg-blue-900" },
    { title: "Financial FP&A Toolkit", category: "Finance", price: "$79", type: "PBIX + Logic", img: "bg-green-900" },
    { title: "HR Attrition Tracker", category: "HR", price: "$39", type: "PBIX Template", img: "bg-purple-900" },
    { title: "Marketing ROI Forecaster", category: "Marketing", price: "$59", type: "PBIX Template", img: "bg-pink-900" },
    { title: "Supply Chain Operations", category: "Operations", price: "$89", type: "PBIX Template", img: "bg-yellow-900" },
    { title: "SaaS Metrics Overview", category: "Finance", price: "$69", type: "PBIX Template", img: "bg-indigo-900" },
  ];

  const categories = ["All", "Sales", "Finance", "HR", "Marketing", "Operations"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Dashboard Store</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Jumpstart your analytics with our professionally designed Power BI templates. Plug in your data and go.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat, i) => (
          <button key={i} className={`px-6 py-2 rounded-full border ${i === 0 ? 'bg-white text-black border-white' : 'border-white/20 text-gray-300 hover:border-white/50'}`}>
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden flex flex-col group">
            <div className={`h-48 w-full ${template.img} flex items-center justify-center relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
              {/* Placeholder for actual dashboard image */}
              <svg className="w-16 h-16 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-2 block">{template.category}</span>
                  <h3 className="text-xl font-bold">{template.title}</h3>
                </div>
                <span className="text-xl font-bold text-white">{template.price}</span>
              </div>
              <p className="text-gray-400 text-sm mb-6 flex-grow">{template.type} - Instant delivery ready for your dataset.</p>
              
              <Link 
                href={`/contact?template=${template.title}`}
                className="w-full text-center bg-white/10 hover:bg-accent text-white py-3 rounded-lg font-medium transition-colors"
              >
                Buy Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
