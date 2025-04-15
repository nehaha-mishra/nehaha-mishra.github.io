import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useHeroDock } from '@/context/HeroDockContext';

const HERO_IMAGE_URL = "https://media.licdn.com/dms/image/v2/D5603AQF3J1PuJQgzLA/profile-displayphoto-shrink_800_800/B56ZWxSgS_HQAc-/0/1742436173578?e=1748476800&v=beta&t=WoKlmS4ehMdbLpmxqJC3L0bllBF0p-kdq6dJda4CCMk";

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Articles', href: '#articles' },
  { label: 'Background', href: '#background' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

const sectionIds = NAV_LINKS.map(link => link.href.replace('#', ''));

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDocked } = useHeroDock();
  const { scrollY } = useScroll();
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  // Enhanced scroll-based animations
  const navBackgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.95]);
  const navShadowOpacity = useTransform(scrollY, [0, 100], [0, 0.1]);

  useEffect(() => {
    const handleScrollSpy = () => {
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const highlightClass =
    'text-neha-600 font-bold';

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 sm:h-20 transition-colors ${isMenuOpen ? 'bg-neha-600 dark:bg-zinc-900 !bg-opacity-100' : 'bg-white/80'} backdrop-blur-lg`}
      style={{
        backgroundColor: isMenuOpen ? undefined : `rgba(255, 255, 255, ${navBackgroundOpacity.get()})`,
        boxShadow: `0 1px 3px rgba(0, 0, 0, ${navShadowOpacity.get()})`,
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo and Name, with advanced shared layoutId animation */}
          <motion.div
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group"
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDocked && (
              <>
                <motion.div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-white shadow-sm relative"
                  layoutId="profile-image"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                >
                  <img
                    src={HERO_IMAGE_URL}
                    alt="Neha Mishra"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.span
                  className="text-neha-700 font-bold text-base sm:text-lg relative whitespace-nowrap"
                  layoutId="profile-name"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                >
                  Neha Mishra
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-neha-600"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.span>
              </>
            )}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = activeSection === href.replace('#', '');
              return (
                <motion.a
                  key={label}
                  href={href}
                  className={`text-foreground hover:text-neha-600 transition-colors font-medium relative group px-2 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-neha-500 ${isActive ? highlightClass : ''}`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  tabIndex={0}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                >
                  {label}
                  {(isActive || !isActive) && (
                    <motion.span
                      className={`absolute left-0 -bottom-1 w-full h-0.5 bg-neha-600 origin-left transition-transform ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                      layoutId={label}
                      style={{
                        transformOrigin: 'left',
                        scaleX: isActive ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-neha-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neha-500"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {/* Full background */}
            <div className="absolute inset-0 bg-neha-600 " style={{zIndex: 0, backgroundColor: 'white'}} />
            {/* Content above background */}
            <div className="relative z-10 flex flex-col items-center justify-start pt-10 px-4 border-b border-neha-700 dark:border-zinc-800 shadow-2xl min-h-screen w-full" style={{zIndex: 0, backgroundColor: 'white'}}>
              {/* Branding/Logo at top */}
              <div className="flex flex-col items-center mb-6 w-full">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-neha-200 shadow mb-2">
                  <img src={HERO_IMAGE_URL} alt="Neha Mishra" className="w-full h-full object-cover" />
                </div>
                <span className="font-display text-xl font-bold text-neha-700 dark:text-neha-100">Neha Mishra</span>
              </div>
              <button
                type="button"
                onClick={toggleMenu}
                className="absolute top-5 right-5 p-3 rounded-full bg-neha-100 text-neha-700 hover:bg-neha-200 dark:bg-zinc-800 dark:text-neha-100 dark:hover:bg-zinc-700 shadow-lg focus:outline-none"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
              <nav className="flex flex-col items-center gap-5 w-full mt-2" style={{ zIndex: 1, color: 'white', backgroundColor: 'white' }}>
                {NAV_LINKS.map(({ label, href }) => {
                  const isActive = activeSection === href.replace('#', '');
                  return (
                    <motion.a
                      key={label}
                      href={href}
                      className={`w-full text-lg sm:text-xl font-semibold transition-colors px-6 py-4 rounded-xl text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-neha-500 ${isActive ? highlightClass + ' bg-neha-50 dark:bg-zinc-800' : 'text-neha-700 dark:text-neha-100 hover:text-neha-900 dark:hover:text-white'}`}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.98 }}
                      tabIndex={0}
                      onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                    >
                      {label}
                      <motion.span
                        className={`block mt-1 h-0.5 bg-neha-600 transition-transform ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                        layoutId={label}
                        style={{ width: isActive ? '100%' : '0%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
