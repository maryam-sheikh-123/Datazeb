import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="border-b border-white/10 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-accent to-yellow-500 bg-clip-text text-transparent">
                Datazeb
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
              <Link href="/store" className="hover:text-accent transition-colors">Store</Link>
              <Link href="/courses" className="hover:text-accent transition-colors">Courses</Link>
              <Link href="/case-studies" className="hover:text-accent transition-colors">Case Studies</Link>
              <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Link 
              href="/contact" 
              className="bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-md font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
          {/* Mobile menu button wrapper - simplified for static layout */}
          <div className="md:hidden flex items-center">
            <Link 
              href="/contact" 
              className="bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile nav links - could be gated behind state, showing inline for simplicity or wrap layout */}
      <div className="md:hidden border-t border-white/10 overflow-x-auto">
        <div className="px-2 pt-2 pb-3 flex space-x-4">
          <Link href="/services" className="hover:text-accent px-3 py-2 text-sm font-medium">Services</Link>
          <Link href="/store" className="hover:text-accent px-3 py-2 text-sm font-medium">Store</Link>
          <Link href="/courses" className="hover:text-accent px-3 py-2 text-sm font-medium">Courses</Link>
          <Link href="/case-studies" className="hover:text-accent px-3 py-2 text-sm font-medium">Cases</Link>
          <Link href="/blog" className="hover:text-accent px-3 py-2 text-sm font-medium">Blog</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
