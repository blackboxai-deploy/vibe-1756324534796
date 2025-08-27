"use client";

import { useState, useEffect } from "react";

export default function HelloWorldPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="text-center space-y-8 p-8 max-w-4xl mx-auto">
        {/* Main Hello World Heading */}
        <div
          className={`transition-all duration-1000 ease-out transform ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Hello World!
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className={`transition-all duration-1000 delay-300 ease-out transform ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Welcome to a beautiful Next.js application built with modern web technologies
          </p>
        </div>

        {/* Feature Cards */}
        <div
          className={`transition-all duration-1000 delay-500 ease-out transform ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {/* Next.js Card */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Next.js</h3>
              <p className="text-gray-600 text-sm">
                Powerful React framework with App Router and server-side rendering
              </p>
            </div>

            {/* Tailwind Card */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Tailwind CSS</h3>
              <p className="text-gray-600 text-sm">
                Utility-first CSS framework for rapid and responsive design
              </p>
            </div>

            {/* TypeScript Card */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">TS</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">TypeScript</h3>
              <p className="text-gray-600 text-sm">
                Type-safe JavaScript for better development experience
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`transition-all duration-1000 delay-700 ease-out transform ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get Started Building
            </button>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`transition-all duration-1000 delay-900 ease-out transform ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-gray-500 text-sm mt-12">
            Built with ❤️ using modern web technologies
          </p>
        </div>
      </div>
    </main>
  );
}