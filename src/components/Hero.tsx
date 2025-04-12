import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current && textRef.current) {
        const scrollY = window.scrollY;
        const opacity = 1 - (scrollY * 0.003);
        const scale = 1 - (scrollY * 0.0003);
        const translateY = scrollY * 0.3;
        
        imageRef.current.style.opacity = String(Math.max(0, opacity));
        imageRef.current.style.transform = `scale(${Math.max(0.95, scale)})`;
        textRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neha-50/30 to-white/80 z-0"></div>
      
      {/* Profile image with parallax effect */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 pointer-events-none z-0"> {/* Adjusted top position to move image slightly down */}
        <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-lg" ref={imageRef}>
          <img 
            src="https://media.licdn.com/dms/image/v2/D5603AQF3J1PuJQgzLA/profile-displayphoto-shrink_800_800/B56ZWxSgS_HQAc-/0/1742436173578?e=1748476800&v=beta&t=WoKlmS4ehMdbLpmxqJC3L0bllBF0p-kdq6dJda4CCMk" 
            alt="Neha Mishra" 
            className="w-full h-full object-cover"
            loading="lazy" 
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 pt-40 pb-20 md:pt-48 md:pb-32 relative z-10" ref={textRef}> {/* Adjusted z-index to ensure content is above image */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-neha-100 text-neha-800 rounded-full text-sm font-medium animate-fade-in">
            Strategic Marketing Specialist
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-in animate-delay-100">
            Hi, I'm <span className="text-neha-700">Neha Mishra</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in animate-delay-200">
            A strategic marketing professional with expertise in customer relationship management, digital marketing, and sales strategy. Currently working as an Independent Consultant at HubSpot.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in animate-delay-300">
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-6 py-3 bg-neha-600 text-white font-medium rounded-lg hover:bg-neha-700 transition-colors shadow-sm"
            >
              Get in Touch
            </a>
            <a 
              href="#experience" 
              className="w-full sm:w-auto px-6 py-3 bg-white text-foreground font-medium rounded-lg hover:bg-neha-50 transition-colors border border-gray-200 shadow-sm"
            >
              View Experience
            </a>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
          <ArrowDown size={20} className="text-neha-600" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
