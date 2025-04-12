import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Mail, FileText } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Transform scroll position to opacity and scale values
  const imageOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const imageScale = useTransform(scrollY, [0, 200], [1, 0.125]);
  const nameOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const nameScale = useTransform(scrollY, [0, 200], [1, 0.8]);
  const imageTranslateY = useTransform(scrollY, [0, 200], [0, -400]);
  const nameTranslateY = useTransform(scrollY, [0, 200], [0, -100]);

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
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden px-4 py-8">
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-neha-50/30 via-white/80 to-neha-100/30 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div 
          className="absolute -top-20 -left-20 w-64 h-64 bg-neha-200/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -right-20 w-64 h-64 bg-neha-300/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      {/* Main content container */}
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        {/* Profile image with parallax effect */}
        <motion.div 
          className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 mb-8 sm:mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          ref={imageRef}
          style={{
            opacity: imageOpacity,
            scale: imageScale,
            y: imageTranslateY,
          }}
        > 
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg ring-4 ring-neha-200/50">
            <img 
              src="https://media.licdn.com/dms/image/v2/D5603AQF3J1PuJQgzLA/profile-displayphoto-shrink_800_800/B56ZWxSgS_HQAc-/0/1742436173578?e=1748476800&v=beta&t=WoKlmS4ehMdbLpmxqJC3L0bllBF0p-kdq6dJda4CCMk" 
              alt="Neha Mishra" 
              className="w-full h-full object-cover"
              loading="lazy" 
            />
          </div>
        </motion.div>
        
        {/* Content */}
        <div className="container mx-auto px-2 sm:px-4 relative z-10" ref={textRef}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="inline-block mb-3 sm:mb-4 px-4 py-1.5 bg-neha-100/80 text-neha-800 rounded-full text-xs sm:text-sm font-medium shadow-sm backdrop-blur-sm"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Strategic Marketing Specialist
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-4 sm:mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                opacity: nameOpacity,
                scale: nameScale,
                y: nameTranslateY,
              }}
            >
              Hi, I'm <span className="text-neha-700 bg-clip-text text-transparent bg-gradient-to-r from-neha-600 to-neha-800">Neha Mishra</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12 px-4 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A strategic marketing professional with expertise in customer relationship management, digital marketing, and sales strategy. Currently working as an Independent Consultant at HubSpot.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 px-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-8 py-4 bg-neha-600 text-white font-medium rounded-lg hover:bg-neha-700 transition-all duration-300 shadow-sm hover:shadow-md text-sm sm:text-base flex items-center justify-center gap-2 group"
              >
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
                Get in Touch
              </a>
              <a 
                href="#experience" 
                className="w-full sm:w-auto px-8 py-4 bg-white text-foreground font-medium rounded-lg hover:bg-neha-50 transition-all duration-300 border border-gray-200 shadow-sm hover:shadow-md text-sm sm:text-base flex items-center justify-center gap-2 group"
              >
                <FileText size={20} className="group-hover:scale-110 transition-transform" />
                View Experience
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <motion.div 
        className="flex flex-col items-center justify-center py-2 sm:py-4 mb-4 sm:mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <span className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} className="text-neha-600" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
