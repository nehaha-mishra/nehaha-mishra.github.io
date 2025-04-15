import { useEffect, useRef } from 'react';
import { ArrowDown, Mail, FileText } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useHeroDock } from '@/context/HeroDockContext';

const HERO_IMAGE_URL = "https://media.licdn.com/dms/image/v2/D5603AQF3J1PuJQgzLA/profile-displayphoto-shrink_800_800/B56ZWxSgS_HQAc-/0/1742436173578?e=1748476800&v=beta&t=WoKlmS4ehMdbLpmxqJC3L0bllBF0p-kdq6dJda4CCMk";

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { setIsDocked } = useHeroDock();
  const { scrollY } = useScroll();

  // Animate out as scroll progresses
  const heroDockProgress = useTransform(scrollY, [0, 120], [0, 1]);

  useEffect(() => {
    return heroDockProgress.on('change', (v) => {
      setIsDocked(v >= 1);
    });
  }, [heroDockProgress, setIsDocked]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden px-2 sm:px-4 pt-24 sm:pt-28 pb-8">
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
          className="absolute -top-20 -left-20 w-40 h-40 sm:w-64 sm:h-64 bg-neha-200/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-20 -right-20 w-40 h-40 sm:w-64 sm:h-64 bg-neha-300/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
      {/* Main content container */}
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        {/* Profile image with shared layoutId */}
        <motion.div 
          className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 mb-6 sm:mb-10 shadow-lg rounded-full overflow-hidden border-4 border-white shadow-lg ring-4 ring-neha-200/50"
          layoutId="profile-image"
          style={{ scale: useTransform(heroDockProgress, [0, 1], [1, 0.2]), opacity: useTransform(heroDockProgress, [0, 1], [1, 0]) }}
        >
          <img 
            src={HERO_IMAGE_URL}
            alt="Neha Mishra" 
            className="w-full h-full object-cover rounded-full"
            loading="lazy" 
            ref={imageRef}
          />
        </motion.div>
        {/* Content */}
        <div className="container mx-auto px-0 sm:px-2 relative z-10" ref={textRef}>
          <div className="max-w-2xl sm:max-w-4xl mx-auto text-center">
            <motion.div 
              className="inline-block mb-3 sm:mb-4 px-4 py-1.5 bg-neha-100/80 text-neha-800 rounded-full text-xs sm:text-sm font-medium shadow-sm backdrop-blur-sm"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Strategic Marketing Communications Specialist
            </motion.div>
            <motion.h1 
              className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-2 sm:mb-6"
              layoutId="profile-name"
              style={{ scale: useTransform(heroDockProgress, [0, 1], [1, 0.4]), opacity: useTransform(heroDockProgress, [0, 1], [1, 0]) }}
            >
              Neha Mishra
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-2xl text-muted-foreground max-w-md sm:max-w-2xl mx-auto mb-6 sm:mb-10 px-2 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              A strategic marketing communications professional with expertise in customer relationship management, digital marketing, and sales strategy. Currently working as an Independent Consultant at HubSpot.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 px-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              <a href="#contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-neha-600 text-white font-semibold shadow hover:bg-neha-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neha-500">Contact Me</a>
              <a href="#resume" className="inline-flex items-center px-6 py-3 rounded-lg bg-white border border-neha-600 text-neha-700 font-semibold shadow hover:bg-neha-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neha-500">My Resume</a>
            </motion.div>
            <motion.div className="flex justify-center mt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              <a href="#about" aria-label="Scroll to About">
                <ArrowDown className="w-7 h-7 animate-bounce text-neha-600" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
