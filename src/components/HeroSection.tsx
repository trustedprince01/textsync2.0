
import React, { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToDemo = () => {
    const demoSection = document.getElementById("demo");
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with dots pattern */}
      <div className="absolute inset-0 bg-dotted-pattern opacity-10 bg-no-repeat bg-cover blur-sm"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Format Your Social Posts <span className="text-primary">Perfectly</span>.
              <br />
              <span className="relative">
                Every Platform. <span className="text-secondary">Every Time</span>.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Stop wasting time manually reformatting posts for different social networks. 
              Our tool instantly optimizes your content for Twitter, Instagram, LinkedIn and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-md px-8 bg-primary hover:bg-primary/90">
                Try For Free - No Signup Required
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-md border-gray-300"
                onClick={scrollToDemo}
              >
                See How It Works
                <ArrowDown size={16} className="ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative bg-white shadow-xl rounded-lg p-6 animate-slide-in-right">
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h3 className="text-sm text-gray-500 mb-2">Original Post</h3>
                <p className="text-gray-800">
                  Just launched our new product! Check it out at textsync.app - super excited to hear your feedback. 
                  #ProductLaunch #SaaSTool #ContentCreation #SocialMediaMarketing #DigitalMarketing
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-primary">
                  <h3 className="text-sm text-primary mb-2">Twitter</h3>
                  <p className="text-gray-800">
                    Just launched our new product! Check it out at textsync.app - super excited to hear your feedback. 
                    #ProductLaunch #SaaS
                  </p>
                  <div className="mt-2 text-xs text-gray-500">Character count: 110/280</div>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-accent">
                  <h3 className="text-sm text-accent mb-2">LinkedIn</h3>
                  <p className="text-gray-800">
                    Just launched our new product! Check it out at textsync.app - super excited to hear your feedback.
                    #ProductLaunch #SaaSTool #ContentCreation
                  </p>
                  <div className="mt-2 text-xs text-gray-500">Optimized for professional audience</div>
                </div>
                
                <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-secondary">
                  <h3 className="text-sm text-secondary mb-2">Instagram</h3>
                  <p className="text-gray-800">
                    Just launched our new product! Check it out at textsync.app
                    .
                    .
                    .
                    #ProductLaunch #SaaSTool #ContentCreation #SocialMediaMarketing #DigitalMarketing
                  </p>
                  <div className="mt-2 text-xs text-gray-500">Formatted for Instagram</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
