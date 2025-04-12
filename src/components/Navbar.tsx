import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Enhanced scroll-based animations
  const navImageScale = useTransform(scrollY, [0, 200], [0.125, 1]);
  const navBackgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.9]);
  const navShadowOpacity = useTransform(scrollY, [0, 100], [0, 0.1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: `rgba(255, 255, 255, ${navBackgroundOpacity.get()})`,
        boxShadow: `0 1px 3px rgba(0, 0, 0, ${navShadowOpacity.get()})`,
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo and Name */}
          <motion.div 
            className="flex items-center gap-3 cursor-pointer group"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: isScrolled ? 1 : 0,
            }}
            transition={{ 
              duration: 0.5,
              ease: "easeOut"
            }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm relative"
              style={{
                scale: navImageScale,
              }}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
            >
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQF3J1PuJQgzLA/profile-displayphoto-shrink_800_800/B56ZWxSgS_HQAc-/0/1742436173578?e=1748476800&v=beta&t=WoKlmS4ehMdbLpmxqJC3L0bllBF0p-kdq6dJda4CCMk" 
                alt="Neha Mishra" 
                className="w-full h-full object-cover"
              />
              <motion.div 
                className="absolute inset-0 bg-neha-600/20 rounded-full"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
            <motion.span 
              className="text-neha-700 font-medium relative"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: isScrolled ? 1 : 0,
              }}
              transition={{ 
                duration: 0.5,
                delay: 0.2,
                ease: "easeOut"
              }}
            >
              Neha Mishra
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-neha-600"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Experience', 'Skills', 'Certifications', 'Resume', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-foreground hover:text-neha-600 transition-colors font-medium relative group"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item}
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-neha-600"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden p-2 text-foreground hover:text-neha-600 transition-colors"
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-white/95 backdrop-blur-md fixed inset-0 z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
              {['About', 'Experience', 'Skills', 'Certifications', 'Resume', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-foreground hover:text-neha-600 transition-colors font-medium py-2 text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => {
                    toggleMenu();
                    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
