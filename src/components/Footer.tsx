
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-display font-semibold text-foreground">Neha Mishra</h3>
            <p className="text-muted-foreground mt-2">Strategic Marketing Professional</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-foreground hover:text-neha-700 transition-colors">About</a></li>
                <li><a href="#experience" className="text-foreground hover:text-neha-700 transition-colors">Experience</a></li>
                <li><a href="#skills" className="text-foreground hover:text-neha-700 transition-colors">Skills</a></li>
                <li><a href="#certifications" className="text-foreground hover:text-neha-700 transition-colors">Certifications</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Expertise</h4>
              <ul className="space-y-2">
                <li><span className="text-foreground">Marketing Strategy</span></li>
                <li><span className="text-foreground">Customer Service</span></li>
                <li><span className="text-foreground">Sales Management</span></li>
                <li><span className="text-foreground">CRM Implementation</span></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#contact" className="text-foreground hover:text-neha-700 transition-colors">Contact</a></li>
                <li><a href="#" className="text-foreground hover:text-neha-700 transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Neha Mishra. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-neha-100 text-neha-700 hover:bg-neha-200 transition-colors"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
