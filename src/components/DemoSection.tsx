import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Twitter, Instagram, Linkedin, Facebook } from "lucide-react";

const DemoSection = () => {
  const [inputText, setInputText] = useState(
    "Just launched our new product! Check it out at textsync.app - super excited to hear your feedback. #ProductLaunch #SaaSTool #ContentCreation #SocialMediaMarketing #DigitalMarketing"
  );
  const [selectedPlatforms, setSelectedPlatforms] = useState([
    "twitter",
    "instagram",
    "linkedin",
  ]);
  const [formattedText, setFormattedText] = useState({
    twitter: "",
    instagram: "",
    linkedin: "",
    facebook: "",
  });

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const togglePlatform = (platform: string) => {
    if (selectedPlatforms.includes(platform)) {
      setSelectedPlatforms(
        selectedPlatforms.filter((item) => item !== platform)
      );
    } else {
      setSelectedPlatforms([...selectedPlatforms, platform]);
    }
  };

  const formatForTwitter = (text: string) => {
    const maxLength = 280;
    let formatted = text;
    
    // Truncate long hashtags
    if (formatted.length > maxLength) {
      const hashtagStart = formatted.indexOf('#');
      if (hashtagStart > -1) {
        formatted = formatted.substring(0, hashtagStart).trim() + " #ProductLaunch #SaaS";
      }
      
      if (formatted.length > maxLength) {
        formatted = formatted.substring(0, maxLength - 3) + "...";
      }
    }
    
    return formatted;
  };
  
  const formatForInstagram = (text: string) => {
    let formatted = text;
    
    // Add line breaks before hashtags for Instagram
    const hashtagStart = formatted.indexOf('#');
    if (hashtagStart > -1) {
      formatted = 
        formatted.substring(0, hashtagStart).trim() + 
        "\n.\n.\n.\n" +
        formatted.substring(hashtagStart);
    }
    
    return formatted;
  };
  
  const formatForLinkedIn = (text: string) => {
    let formatted = text;
    
    // Limit hashtags for LinkedIn
    const hashtags = formatted.match(/#[a-zA-Z0-9]+/g) || [];
    if (hashtags.length > 3) {
      const contentWithoutHashtags = formatted.split('#')[0].trim();
      formatted = contentWithoutHashtags + " " + hashtags.slice(0, 3).join(' ');
    }
    
    return formatted;
  };
  
  const formatForFacebook = (text: string) => {
    // For Facebook, we'll keep it mostly the same
    return text;
  };

  const handleFormat = () => {
    setFormattedText({
      twitter: formatForTwitter(inputText),
      instagram: formatForInstagram(inputText),
      linkedin: formatForLinkedIn(inputText),
      facebook: formatForFacebook(inputText),
    });
  };

  // Call format on initial render and when input changes
  useEffect(() => {
    handleFormat();
  }, [inputText]);

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Could add toast message here
  };

  return (
    <section
      id="demo"
      className="py-20 bg-muted relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background with dots pattern */}
      <div className="absolute inset-0 bg-dotted-pattern opacity-5 bg-no-repeat bg-cover blur-sm"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Try <span className="text-primary">TextSync</span> Now
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how our tool transforms your content in real-time
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-5xl mx-auto animate-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-6 border-b lg:border-b-0 lg:border-r border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Your Original Post</h3>
              <textarea
                className="w-full h-48 p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Paste your content here..."
              ></textarea>
              
              <div className="mt-4">
                <div className="flex justify-between mb-4">
                  <h4 className="text-sm font-medium text-gray-700">Select Platforms:</h4>
                  <Button onClick={handleFormat} className="bg-primary text-white">
                    Format
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={selectedPlatforms.includes("twitter") ? "default" : "outline"}
                    size="sm"
                    onClick={() => togglePlatform("twitter")}
                    className={selectedPlatforms.includes("twitter") ? "bg-blue-500" : ""}
                  >
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </Button>
                  <Button
                    variant={selectedPlatforms.includes("instagram") ? "default" : "outline"}
                    size="sm"
                    onClick={() => togglePlatform("instagram")}
                    className={selectedPlatforms.includes("instagram") ? "bg-pink-600" : ""}
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </Button>
                  <Button
                    variant={selectedPlatforms.includes("linkedin") ? "default" : "outline"}
                    size="sm"
                    onClick={() => togglePlatform("linkedin")}
                    className={selectedPlatforms.includes("linkedin") ? "bg-blue-700" : ""}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button
                    variant={selectedPlatforms.includes("facebook") ? "default" : "outline"}
                    size="sm"
                    onClick={() => togglePlatform("facebook")}
                    className={selectedPlatforms.includes("facebook") ? "bg-blue-600" : ""}
                  >
                    <Facebook className="w-4 h-4 mr-2" />
                    Facebook
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Optimized Posts</h3>
              <Tabs defaultValue="twitter" className="w-full">
                <TabsList className="w-full mb-4">
                  {selectedPlatforms.includes("twitter") && (
                    <TabsTrigger value="twitter" className="flex-1">
                      <Twitter className="w-4 h-4 mr-2" />
                      Twitter
                    </TabsTrigger>
                  )}
                  {selectedPlatforms.includes("instagram") && (
                    <TabsTrigger value="instagram" className="flex-1">
                      <Instagram className="w-4 h-4 mr-2" />
                      Instagram
                    </TabsTrigger>
                  )}
                  {selectedPlatforms.includes("linkedin") && (
                    <TabsTrigger value="linkedin" className="flex-1">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </TabsTrigger>
                  )}
                  {selectedPlatforms.includes("facebook") && (
                    <TabsTrigger value="facebook" className="flex-1">
                      <Facebook className="w-4 h-4 mr-2" />
                      Facebook
                    </TabsTrigger>
                  )}
                </TabsList>
                
                {selectedPlatforms.includes("twitter") && (
                  <TabsContent value="twitter" className="border border-gray-200 rounded-lg p-4 text-gray-800">
                    <div className="mb-2 text-sm font-medium text-blue-500">Twitter Format</div>
                    {formattedText.twitter}
                    <div className="mt-4 flex justify-between items-center border-t border-gray-100 pt-3">
                      <span className="text-xs text-gray-500">
                        {formattedText.twitter.length}/280 characters
                      </span>
                      <Button size="sm" onClick={() => handleCopyToClipboard(formattedText.twitter)}>
                        Copy to Clipboard
                      </Button>
                    </div>
                  </TabsContent>
                )}
                
                {selectedPlatforms.includes("instagram") && (
                  <TabsContent value="instagram" className="border border-gray-200 rounded-lg p-4 text-gray-800">
                    <div className="mb-2 text-sm font-medium text-pink-600">Instagram Format</div>
                    {formattedText.instagram.split('\n').map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                    <div className="mt-4 flex justify-between items-center border-t border-gray-100 pt-3">
                      <span className="text-xs text-gray-500">Optimized for Instagram</span>
                      <Button size="sm" onClick={() => handleCopyToClipboard(formattedText.instagram)}>
                        Copy to Clipboard
                      </Button>
                    </div>
                  </TabsContent>
                )}
                
                {selectedPlatforms.includes("linkedin") && (
                  <TabsContent value="linkedin" className="border border-gray-200 rounded-lg p-4 text-gray-800">
                    <div className="mb-2 text-sm font-medium text-blue-700">LinkedIn Format</div>
                    {formattedText.linkedin}
                    <div className="mt-4 flex justify-between items-center border-t border-gray-100 pt-3">
                      <span className="text-xs text-gray-500">Optimized for professional audience</span>
                      <Button size="sm" onClick={() => handleCopyToClipboard(formattedText.linkedin)}>
                        Copy to Clipboard
                      </Button>
                    </div>
                  </TabsContent>
                )}
                
                {selectedPlatforms.includes("facebook") && (
                  <TabsContent value="facebook" className="border border-gray-200 rounded-lg p-4 text-gray-800">
                    <div className="mb-2 text-sm font-medium text-blue-600">Facebook Format</div>
                    {formattedText.facebook}
                    <div className="mt-4 flex justify-between items-center border-t border-gray-100 pt-3">
                      <span className="text-xs text-gray-500">Ready for Facebook</span>
                      <Button size="sm" onClick={() => handleCopyToClipboard(formattedText.facebook)}>
                        Copy to Clipboard
                      </Button>
                    </div>
                  </TabsContent>
                )}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
