
import React, { useEffect, useRef } from "react";
import { Check, Hash, LayoutDashboard } from "lucide-react";

const ProblemSolutionSection = () => {
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
      id="features"
      className="py-20 bg-muted relative overflow-hidden"
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
            One Post. Multiple Platforms. <span className="text-primary">Zero Headaches.</span>
          </h2>
          <p 
            className="text-lg text-gray-600 max-w-2xl mx-auto animate-on-scroll"
            ref={(el) => (elementsRef.current[1] = el)}
          >
            TextSync solves your biggest content formatting challenges across all major social platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            className="bg-white p-8 rounded-lg shadow-md animate-on-scroll"
            ref={(el) => (elementsRef.current[2] = el)}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-6">
              <Check size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Character Limits</h3>
            <p className="text-gray-600">
              Automatically adjusts your content to fit platform-specific character limits without
              losing your message's impact. Never worry about truncated posts again.
            </p>
          </div>

          <div 
            className="bg-white p-8 rounded-lg shadow-md animate-on-scroll"
            ref={(el) => (elementsRef.current[3] = el)}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 text-secondary mb-6">
              <Hash size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Hashtag Optimization</h3>
            <p className="text-gray-600">
              Intelligently selects the perfect hashtags for each platform, optimizing
              for reach and engagement based on platform-specific best practices.
            </p>
          </div>

          <div 
            className="bg-white p-8 rounded-lg shadow-md animate-on-scroll"
            ref={(el) => (elementsRef.current[4] = el)}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-6">
              <LayoutDashboard size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Platform-Specific Formatting</h3>
            <p className="text-gray-600">
              Automatically formats your content for each platform's unique requirements,
              including line breaks, link formatting, and mention handling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
