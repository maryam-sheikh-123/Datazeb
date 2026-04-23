import Link from "next/link";
import { blogPosts } from "@/lib/blogData";

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Insights & Resources</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Expert articles on Power BI, data engineering, and business analytics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, idx) => (
          <article key={idx} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden flex flex-col group hover:border-accent/50 transition-all">
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded font-medium">{post.category}</span>
                <span className="text-xs text-gray-500">{post.readTime}</span>
              </div>
              
              <h2 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{post.title}</h2>
              <p className="text-gray-400 mb-6 flex-grow">{post.excerpt}</p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                <span className="text-sm text-gray-500">{post.date}</span>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-white hover:text-accent font-medium inline-flex items-center transition-colors"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <button className="border border-white/20 hover:bg-white/5 text-white px-8 py-3 rounded-lg font-medium transition-colors">
          Load More Articles
        </button>
      </div>
    </div>
  );
}
