import React from "react";
import Link from "next/link";
import { blogPosts } from "@/lib/blogData";
import { notFound } from "next/navigation";

// Use proper type for Next.js 14 parameters
interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-32 text-center flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-6xl font-bold text-accent mb-6">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Article Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md">The blog post you're looking for doesn't exist or has been moved.</p>
        <Link 
          href="/blog"
          className="bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-md font-medium transition-colors inline-block"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
      <Link 
        href="/blog"
        className="text-gray-400 hover:text-accent font-medium inline-flex items-center mb-10 transition-colors"
      >
        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Blog
      </Link>

      <header className="mb-12 border-b border-white/10 pb-10">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-semibold tracking-wide">
            {post.category}
          </span>
          <span className="text-gray-400 text-sm flex items-center">
            <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {post.readTime}
          </span>
          <span className="text-gray-400 text-sm flex items-center">
            <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {post.date}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          {post.title}
        </h1>
        
        <div className="flex items-center mt-6">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-accent to-yellow-500 flex items-center justify-center font-bold text-lg text-white">
            OJ
          </div>
          <div className="ml-4">
            <p className="font-semibold text-lg">{post.author}</p>
            <p className="text-sm text-gray-400">Founder, Datazeb</p>
          </div>
        </div>
      </header>

      <div className="prose prose-invert prose-lg max-w-none prose-a:text-accent hover:prose-a:text-accent-hover mt-8">
        {post.content.map((section, idx) => (
          <div key={idx} className="mb-10">
            {section.heading && (
              <h2 className="text-3xl font-bold mt-8 mb-4 text-white">
                {section.heading}
              </h2>
            )}
            {section.paragraphs.map((paragraph, pIdx) => (
              <p key={pIdx} className="text-gray-300 leading-relaxed mb-6 text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Link 
          href="/blog"
          className="text-gray-400 hover:text-accent font-medium inline-flex items-center transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </Link>
      </div>

      <footer className="mt-12 pt-12 border-t border-white/10 bg-white/5 rounded-2xl p-8 md:p-12 text-center border-l-4 border-l-accent">
        <h3 className="text-3xl font-bold mb-4">Want Expert Power BI Help?</h3>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Our team of experts can help you unlock your data's full potential. Whether it's a new dashboard, an architectural review, or complex DAX optimization.
        </p>
        <Link 
          href={`/contact?interest=${encodeURIComponent(post.title)}`}
          className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-md font-bold text-lg transition-colors inline-block"
        >
          Contact Us
        </Link>
      </footer>
    </article>
  );
}
