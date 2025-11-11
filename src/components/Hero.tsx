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
        className="absolute inset-0 bg-gradient-to-br from-neha-100/50 via-white to-neha-50/40 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div 
          className="absolute -top-20 -left-20 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-neha-300/30 to-neha-400/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-20 -right-20 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-neha-400/30 to-neha-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-neha-200/20 to-neha-300/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>
      {/* Main content container */}
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        {/* Profile image with shared layoutId */}
        <motion.div 
          className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 mb-6 sm:mb-10 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-4 ring-neha-300/60"
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
              className="inline-block mb-3 sm:mb-4 px-4 py-2 bg-gradient-to-r from-neha-100 to-neha-50 text-neha-800 rounded-full text-xs sm:text-sm font-medium shadow-md backdrop-blur-sm border border-neha-200/50"
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
              <a href="#contact" className="inline-flex items-center px-8 py-3.5 rounded-xl bg-gradient-to-r from-neha-600 to-neha-700 text-white font-semibold shadow-lg hover:shadow-xl hover:from-neha-700 hover:to-neha-800 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-neha-500 focus-visible:ring-offset-2">
                Contact Me
              </a>
              <a href="#resume" className="inline-flex items-center px-8 py-3.5 rounded-xl bg-white border-2 border-neha-600 text-neha-700 font-semibold shadow-md hover:shadow-lg hover:bg-neha-50 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-neha-500 focus-visible:ring-offset-2">
                My Resume
              </a>
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
