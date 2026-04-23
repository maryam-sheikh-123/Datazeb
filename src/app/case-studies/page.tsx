import Link from "next/link";

export default function CaseStudies() {
  const cases = [
    {
      industry: "Retail & E-commerce",
      problem: "Disjointed inventory systems leading to stockouts and overstock scenarios across 50+ stores.",
      solution: "Implemented an end-to-end Microsoft Fabric architecture pulling real-time POS data into a unified Power BI Inventory Dashboard.",
      results: "Reduced stockouts by 35% and optimized working capital by $2.4M within the first quarter."
    },
    {
      industry: "Financial Services",
      problem: "Manual, error-prone weekly reporting that took analysts 20 hours to compile before executive meetings.",
      solution: "Automated data pipelines and built an interactive Executive FP&A Dashboard with dynamic forecasting scenarios.",
      results: "Saved 80 hours per month. Improved forecasting accuracy by 15% through integrated machine learning models."
    },
    {
      industry: "Manufacturing",
      problem: "Lack of visibility into machine downtime and production bottlenecks across multiple factory floors.",
      solution: "IoT data integration with Power BI to create an Overall Equipment Effectiveness (OEE) tracking system.",
      results: "Increased factory output by 12% and reduced unplanned maintenance downtime by 20%."
    },
    {
      industry: "Healthcare Analytics",
      problem: "Difficulty tracking patient wait times and resource allocation across different clinic departments.",
      solution: "Deployed a secure, scalable data model handling HIPAA-compliant data visualized in a Patient Journey Dashboard.",
      results: "Reduced average patient wait time by 18 minutes. Improved resource allocation efficiency during peak hours."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Client Success Stories</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          See how we've transformed complex data challenges into measurable business impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cases.map((study, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
            <span className="text-accent text-sm font-bold tracking-wider uppercase mb-4">{study.industry}</span>
            
            <div className="flex-grow space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span> Problem
                </h4>
                <p className="text-gray-400">{study.problem}</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span> Solution
                </h4>
                <p className="text-gray-400">{study.solution}</p>
              </div>
              
              <div className="p-4 bg-white/5 rounded-lg border border-white/5 mt-4">
                <h4 className="text-lg font-semibold text-accent mb-2 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span> Results
                </h4>
                <p className="text-white font-medium">{study.results}</p>
              </div>
            </div>
            
            <Link 
              href="/contact?interest=case-study"
              className="mt-8 text-center border border-white/20 hover:border-accent hover:text-accent bg-transparent text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              See Full Case Study
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
