import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-accent to-yellow-500 bg-clip-text text-transparent">
              Datazeb
            </span>
            <p className="mt-2 text-sm text-gray-400 max-w-xs">
              Power BI Dashboards That Drive Real Business Results. Founded by Ovais Janzeb.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link href="/services" className="text-gray-400 hover:text-accent transition-colors">Services</Link>
            <Link href="/courses" className="text-gray-400 hover:text-accent transition-colors">Courses</Link>
            <Link href="/contact" className="text-gray-400 hover:text-accent transition-colors">Contact</Link>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Datazeb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
