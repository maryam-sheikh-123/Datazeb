import Link from "next/link";

export default function Services() {
  const services = [
    {
      id: "dashboard-dev",
      title: "Power BI Dashboard Development",
      description: "We build intuitive, high-performance dashboards that transform raw data into visually stunning and actionable insights.",
      features: ["Custom visual design", "DAX measure optimization", "Automated data refreshes", "Mobile-optimized layouts"],
    },
    {
      id: "fabric-architecture",
      title: "Microsoft Fabric & Data Architecture",
      description: "Modernize your data estate with Microsoft Fabric. We design scalable architectures that unify your data engineering, data science, and analytics.",
      features: ["OneLake integration", "Data pipeline development", "DirectLake mode optimization", "Secure governance setup"],
    },
    {
      id: "business-ai",
      title: "Business AI & Analytics",
      description: "Go beyond descriptive analytics. We implement AI solutions to forecast trends, detect anomalies, and provide prescriptive next steps.",
      features: ["Machine learning integration", "Predictive forecasting models", "Copilot for Power BI setup", "Natural language querying"],
    },
    {
      id: "consulting",
      title: "Power BI Consulting",
      description: "Need expert guidance? We offer comprehensive consulting to audit your current setup, train your team, and establish best practices.",
      features: ["Performance auditing", "Tenant administration", "Team training workshops", "License cost optimization"],
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Our Services</h1>
        <p className="mt-6 text-xl text-gray-400">
          Comprehensive data solutions designed to unlock the full potential of your business information.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {services.map((service, idx) => (
          <div key={service.id} className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 hover:border-accent/30 transition-all">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
              <p className="text-lg text-gray-400 mb-6">{service.description}</p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/3 flex items-center justify-center border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-8">
              <Link 
                href={`/contact?service=${service.id}`}
                className="w-full text-center bg-transparent border-2 border-accent hover:bg-accent text-white px-6 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Get This Service
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
