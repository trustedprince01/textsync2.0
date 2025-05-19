
import React, { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
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

  const freePlanFeatures = [
    "Format up to 5 posts daily",
    "Support for 3 platforms",
    "Basic analytics",
    "Standard formatting options",
  ];

  const proPlanFeatures = [
    "Unlimited posts",
    "All platforms supported",
    "Advanced analytics",
    "Custom formatting templates",
    "Scheduled posting",
    "Priority support",
  ];

  return (
    <section
      id="pricing"
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
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p 
            className="text-lg text-gray-600 max-w-2xl mx-auto animate-on-scroll"
            ref={(el) => (elementsRef.current[1] = el)}
          >
            Get started for free, upgrade when you need more power
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div 
            className="bg-white rounded-lg shadow-md overflow-hidden animate-on-scroll"
            ref={(el) => (elementsRef.current[2] = el)}
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Free</h3>
              <p className="text-gray-500 mb-6">Perfect for casual users</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-gray-500">/month</span>
              </div>

              <ul className="space-y-3 mb-8">
                {freePlanFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="mr-2 text-green-500">
                      <Check size={16} />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full">Get Started</Button>
            </div>
          </div>

          <div 
            className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-primary animate-on-scroll"
            ref={(el) => (elementsRef.current[3] = el)}
          >
            <div className="bg-primary text-white text-center py-2">
              <span className="text-sm font-medium">Recommended</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Pro</h3>
              <p className="text-gray-500 mb-6">For power users and teams</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$9.99</span>
                <span className="text-gray-500">/month</span>
              </div>

              <ul className="space-y-3 mb-8">
                {proPlanFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="mr-2 text-green-500">
                      <Check size={16} />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full bg-primary hover:bg-primary/90">
                Upgrade to Pro
              </Button>
            </div>
          </div>
        </div>

        <div 
          className="mt-12 p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto animate-on-scroll"
          ref={(el) => (elementsRef.current[4] = el)}
        >
          <h3 className="text-lg font-semibold mb-4">Need a custom plan for your team?</h3>
          <p className="text-gray-600 mb-4">
            Contact us for enterprise pricing, custom features, and dedicated support.
          </p>
          <Button variant="outline">Contact Sales</Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
