import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Close mobile menu when clicking a link
  const closeMobileMenu = () => setIsMenuOpen(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <a href="#" className="text-2xl font-display font-extrabold text-foreground tracking-wide">
            Neha Mishra
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm font-medium text-foreground hover:text-neha-700 transition-colors">
              About
            </a>
            <a href="#experience" className="text-sm font-medium text-foreground hover:text-neha-700 transition-colors">
              Experience
            </a>
            <a href="#skills" className="text-sm font-medium text-foreground hover:text-neha-700 transition-colors">
              Skills
            </a>
            <a href="#certifications" className="text-sm font-medium text-foreground hover:text-neha-700 transition-colors">
              Certifications
            </a>
            <a href="#resume" className="text-sm font-medium text-foreground hover:text-neha-700 transition-colors">
              Resume
            </a>
            <a href="#contact" className="text-sm font-medium text-white bg-neha-600 hover:bg-neha-700 px-5 py-2 rounded-full shadow-md transition-all">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground focus:outline-none hover:text-neha-700 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass fixed inset-0 top-16 p-4 bg-white/90 backdrop-blur-md shadow-lg z-50 overflow-y-auto">
            <div className="flex flex-col space-y-6 pt-8 items-center">
              <a 
                href="#about" 
                className="text-lg font-medium text-foreground hover:text-neha-700 transition-colors"
                onClick={closeMobileMenu}
              >
                About
              </a>
              <a 
                href="#experience" 
                className="text-lg font-medium text-foreground hover:text-neha-700 transition-colors"
                onClick={closeMobileMenu}
              >
                Experience
              </a>
              <a 
                href="#skills" 
                className="text-lg font-medium text-foreground hover:text-neha-700 transition-colors"
                onClick={closeMobileMenu}
              >
                Skills
              </a>
              <a 
                href="#certifications" 
                className="text-lg font-medium text-foreground hover:text-neha-700 transition-colors"
                onClick={closeMobileMenu}
              >
                Certifications
              </a>
              <a 
                href="#resume" 
                className="text-lg font-medium text-foreground hover:text-neha-700 transition-colors"
                onClick={closeMobileMenu}
              >
                Resume
              </a>
              <a 
                href="#contact" 
                className="text-lg font-medium text-white bg-neha-600 hover:bg-neha-700 px-6 py-3 rounded-full shadow-md transition-all w-full max-w-xs text-center mt-4"
                onClick={closeMobileMenu}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
