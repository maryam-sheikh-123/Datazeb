import Link from "next/link";

export default function Courses() {
  const courses = [
    {
      title: "Power BI Beginner to Advanced",
      duration: "8 Weeks",
      level: "All Levels",
      description: "Master Power BI from the ground up. Learn data ingestion, visualization, and publishing with real-world datasets.",
      icon: "📊"
    },
    {
      title: "DAX Masterclass",
      duration: "4 Weeks",
      level: "Advanced",
      description: "Dive deep into Data Analysis Expressions. Solve complex business requirements using advanced calculation patterns.",
      icon: "🧮"
    },
    {
      title: "Microsoft Fabric Essentials",
      duration: "6 Weeks",
      level: "Intermediate",
      description: "Understand the unified analytics platform. Learn OneLake, data engineering, and seamless integration with Power BI.",
      icon: "☁️"
    },
    {
      title: "Data Modeling in Power BI",
      duration: "3 Weeks",
      level: "Intermediate",
      description: "Build robust star schemas. Optimize for performance and scalability before writing a single line of DAX.",
      icon: "🏗️"
    },
    {
      title: "Business Intelligence with AI",
      duration: "5 Weeks",
      level: "Advanced",
      description: "Integrate Machine Learning and AI capabilities into your analytics workflow to predict trends and automate insights.",
      icon: "🤖"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Datazeb Academy</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Elevate your team's data literacy with our expert-led training programs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 flex flex-col">
            <div className="text-4xl mb-6 bg-white/10 w-16 h-16 flex items-center justify-center rounded-xl">
              {course.icon}
            </div>
            
            <div className="flex gap-3 mb-4 text-xs font-semibold text-gray-400">
              <span className="bg-white/10 px-3 py-1 rounded-full">{course.duration}</span>
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full">{course.level}</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
            <p className="text-gray-400 mb-8 flex-grow">{course.description}</p>
            
            <Link 
              href={`/contact?course=${course.title}`}
              className="mt-auto w-full text-center bg-accent hover:bg-accent-hover text-white py-3 rounded-lg font-bold transition-colors shadow-lg shadow-accent/20"
            >
              Enroll Now
            </Link>
          </div>
        ))}
        
        {/* Placeholder for corporate training block to make it a neat grid of 6 */}
        <div className="bg-gradient-to-br from-accent/20 to-transparent border border-accent/30 rounded-2xl p-8 flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl font-bold mb-4">Corporate Training</h3>
          <p className="text-gray-300 mb-8">Need to train a whole team? We offer customized workshops tailored to your specific business data.</p>
          <Link 
            href="/contact"
            className="w-full text-center bg-white text-black py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
          >
            Request Custom Training
          </Link>
        </div>
      </div>
    </div>
  );
}
