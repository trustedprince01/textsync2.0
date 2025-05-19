
import React, { useEffect, useRef } from "react";
import { Play } from "lucide-react";

const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section
      id="how-it-works"
      className="py-20 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background with dots pattern */}
      <div className="absolute inset-0 bg-dotted-pattern opacity-5 bg-no-repeat bg-cover blur-sm"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll"
            ref={(el) => (elementsRef.current[0] = el)}
          >
            So Simple <span className="text-primary">Anyone Can Use It</span>
          </h2>
          <p 
            className="text-lg text-gray-600 max-w-2xl mx-auto animate-on-scroll"
            ref={(el) => (elementsRef.current[1] = el)}
          >
            Transform your social media workflow in three easy steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div 
            className="relative animate-on-scroll"
            ref={(el) => (elementsRef.current[2] = el)}
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold relative z-10">
                1
              </div>
              <div className="absolute top-8 left-1/2 h-0.5 bg-gray-200 w-full hidden md:block"></div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Paste your original post</h3>
              <p className="text-gray-600 mb-6">
                Just copy and paste your content into our editor. No formatting needed.
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="h-36 bg-gray-50 rounded flex items-center justify-center text-gray-400 text-sm">
                  <p className="text-center">
                    Type or paste your content here...
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div 
            className="relative animate-on-scroll"
            ref={(el) => (elementsRef.current[3] = el)}
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold relative z-10">
                2
              </div>
              <div className="absolute top-8 left-1/2 h-0.5 bg-gray-200 w-full hidden md:block"></div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Select your target platforms</h3>
              <p className="text-gray-600 mb-6">
                Choose which platforms you want to format your content for.
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-blue-100 py-2 px-3 rounded text-xs text-blue-700 font-medium flex items-center justify-center">
                    Twitter
                  </div>
                  <div className="bg-pink-100 py-2 px-3 rounded text-xs text-pink-700 font-medium flex items-center justify-center">
                    Instagram
                  </div>
                  <div className="bg-blue-200 py-2 px-3 rounded text-xs text-blue-800 font-medium flex items-center justify-center">
                    Facebook
                  </div>
                  <div className="bg-blue-300 py-2 px-3 rounded text-xs text-blue-900 font-medium flex items-center justify-center">
                    LinkedIn
                  </div>
                  <div className="bg-red-100 py-2 px-3 rounded text-xs text-red-700 font-medium flex items-center justify-center">
                    YouTube
                  </div>
                  <div className="bg-gray-100 py-2 px-3 rounded text-xs text-gray-700 font-medium flex items-center justify-center">
                    +2 more
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div 
            className="relative animate-on-scroll"
            ref={(el) => (elementsRef.current[4] = el)}
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Get optimized versions instantly</h3>
              <p className="text-gray-600 mb-6">
                Copy your perfectly formatted posts or schedule directly to each platform.
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="bg-green-50 p-3 rounded-lg border border-green-100 mb-3 text-left text-sm text-gray-700">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-medium text-green-600">Ready for Twitter</span>
                    <button className="text-xs text-primary font-medium">Copy</button>
                  </div>
                  Just launched our new product! Check it out at...
                </div>
                <div className="flex justify-center">
                  <button className="flex items-center gap-1 text-sm text-accent">
                    <Play size={16} />
                    <span>See demo</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
