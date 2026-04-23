import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-background to-background"></div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-tight">
          Power BI Dashboards That Drive <span className="text-accent">Real Business Results</span>
        </h1>
        <p className="mt-6 text-xl text-gray-400 max-w-2xl">
          We transform your complex data into clear, actionable insights through world-class Power BI solutions, Business AI, and Microsoft Fabric architectures.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link 
            href="/contact" 
            className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-md font-bold text-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(249,115,22,0.3)]"
          >
            Get Started
          </Link>
          <Link 
            href="/services" 
            className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-md font-bold text-lg transition-all"
          >
            Explore Services
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-white/10 bg-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center ml-0">
            <div>
              <p className="text-4xl font-bold text-accent">50+</p>
              <p className="mt-2 text-gray-400 font-medium">Global Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent">200+</p>
              <p className="mt-2 text-gray-400 font-medium">Dashboards Built</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent">5+</p>
              <p className="mt-2 text-gray-400 font-medium">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent">100%</p>
              <p className="mt-2 text-gray-400 font-medium">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Our Core Expertise</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">End-to-end data solutions tailored for modern enterprises.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Power BI Development", desc: "Custom, interactive dashboards that tell your data's story clearly." },
            { title: "Microsoft Fabric", desc: "Robust data architecture and foundational engineering for scale." },
            { title: "Business AI", desc: "Predictive analytics and ML models integrated with your BI tools." },
            { title: "Power BI Consulting", desc: "Expert guidance on governance, performance tuning, and adoption." }
          ].map((service, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-accent/50 transition-colors group">
              <div className="h-12 w-12 bg-accent/20 text-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.desc}</p>
              <Link href="/services" className="text-accent font-medium hover:underline inline-flex items-center">
                Learn more <span className="ml-1">→</span>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            href="/contact" 
            className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-md font-bold text-lg transition-colors inline-block"
          >
            Discuss Your Project 
          </Link>
        </div>
      </section>
    </div>
  );
}
