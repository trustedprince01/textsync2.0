
import React, { useEffect, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Content Marketing Manager",
    image: "https://i.pravatar.cc/100?img=32",
    text: "TextSync saves me hours every week. I used to spend so much time reformatting posts for different platforms. Now, I just write once and let TextSync do the rest.",
  },
  {
    name: "Michael Chen",
    role: "Digital Marketing Consultant",
    image: "https://i.pravatar.cc/100?img=11",
    text: "My clients have seen a 32% increase in engagement since we started using TextSync to optimize posts for each platform. The hashtag optimization is particularly impressive.",
  },
  {
    name: "Jessica Rodriguez",
    role: "Social Media Influencer",
    image: "https://i.pravatar.cc/100?img=26",
    text: "As someone who posts across 6 different platforms daily, TextSync has been a game-changer. It's like having a social media expert handling all my formatting needs.",
  },
  {
    name: "Daniel Smith",
    role: "Brand Strategist",
    image: "https://i.pravatar.cc/100?img=15",
    text: "TextSync has revolutionized our workflow. What used to take us 30 minutes per post now happens with the click of a button. I recommend it to all my clients.",
  },
  {
    name: "Olivia Wang",
    role: "E-commerce Manager",
    image: "https://i.pravatar.cc/100?img=23",
    text: "Since using TextSync, our social engagement has increased by 45%. The platform-specific optimizations make a real difference in how our audience interacts with our content.",
  },
];

// Create duplicate testimonials for smooth infinite scrolling
const allTestimonials = [...testimonials, ...testimonials];

const TestimonialsSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Auto-scroll setup for testimonials
    let scrollInterval: number | null = null;
    
    if (carouselRef.current) {
      const startAutoScroll = () => {
        scrollInterval = window.setInterval(() => {
          if (carouselRef.current) {
            carouselRef.current.scrollLeft += 1;
            
            // Reset scroll position when reaching the end
            const scrollWidth = carouselRef.current.scrollWidth;
            const containerWidth = carouselRef.current.clientWidth;
            
            if (carouselRef.current.scrollLeft > scrollWidth - containerWidth - 10) {
              carouselRef.current.scrollLeft = 0;
            }
          }
        }, 20);
      };

      const stopAutoScroll = () => {
        if (scrollInterval !== null) {
          clearInterval(scrollInterval);
        }
      };

      startAutoScroll();

      // Pause scrolling when hovering
      carouselRef.current.addEventListener('mouseenter', stopAutoScroll);
      carouselRef.current.addEventListener('mouseleave', startAutoScroll);

      return () => {
        stopAutoScroll();
        if (carouselRef.current) {
          carouselRef.current.removeEventListener('mouseenter', stopAutoScroll);
          carouselRef.current.removeEventListener('mouseleave', startAutoScroll);
        }
        observer.disconnect();
      };
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Background with dots pattern */}
      <div className="absolute inset-0 bg-dotted-pattern opacity-5 bg-no-repeat bg-cover blur-sm"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
            Trusted by <span className="text-primary">Content Creators</span> Everywhere
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-on-scroll">
            Here's what our users are saying about TextSync
          </p>
        </div>

        <div className="animate-on-scroll overflow-hidden">
          <div 
            className="carousel-content flex overflow-hidden w-full" 
            ref={carouselRef}
          >
            <div className="carousel-scroll flex gap-6 py-4">
              {allTestimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md flex-shrink-0 w-full md:w-[400px] h-[250px]"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                  <div className="mt-4 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
