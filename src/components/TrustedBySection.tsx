
import React from "react";
import { Twitter, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

const TrustedBySection = () => {
  const socialPlatforms = [
    { name: "Twitter", icon: <Twitter size={32} className="text-[#1DA1F2]" /> },
    { name: "Instagram", icon: <Instagram size={32} className="text-[#E1306C]" /> },
    { name: "Facebook", icon: <Facebook size={32} className="text-[#4267B2]" /> },
    { name: "LinkedIn", icon: <Linkedin size={32} className="text-[#0077B5]" /> },
    { name: "YouTube", icon: <Youtube size={32} className="text-[#FF0000]" /> },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-wider text-gray-500 font-medium">
            TRUSTED BY SOCIAL MEDIA EXPERTS
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {socialPlatforms.map((platform, index) => (
            <div
              key={index}
              className="flex flex-col items-center animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {platform.icon}
              <span className="text-sm text-gray-600 mt-2">{platform.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
