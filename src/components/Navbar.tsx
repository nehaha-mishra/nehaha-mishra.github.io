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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <a href="#" className="text-xl font-display font-bold text-foreground">
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
            <a href="#contact" className="text-sm font-medium text-white bg-neha-600 hover:bg-neha-700 px-4 py-2 rounded-md transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass fixed inset-0 top-16 p-4">
            <div className="flex flex-col space-y-6 pt-8 items-center">
              <a 
                href="#about" 
                className="text-lg font-medium text-foreground hover:text-neha-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#projects" 
                className="text-lg font-medium text-foreground hover:text-neha-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#skills" 
                className="text-lg font-medium text-foreground hover:text-neha-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#resume" 
                className="text-lg font-medium text-foreground hover:text-neha-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </a>
              <a 
                href="#contact" 
                className="text-lg font-medium text-white bg-neha-600 hover:bg-neha-700 px-6 py-2 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
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
