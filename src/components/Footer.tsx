import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white py-8 sm:py-12 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-display font-semibold text-foreground">Neha Mishra</h3>
            <p className="text-sm sm:text-base text-muted-foreground mt-1 sm:mt-2">Strategic Marketing Professional</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12 text-center md:text-left w-full md:w-auto">
            <div>
              <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 sm:mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-sm sm:text-base text-foreground hover:text-neha-700 transition-colors">About</a></li>
                <li><a href="#experience" className="text-sm sm:text-base text-foreground hover:text-neha-700 transition-colors">Experience</a></li>
                <li><a href="#skills" className="text-sm sm:text-base text-foreground hover:text-neha-700 transition-colors">Skills</a></li>
                <li><a href="#certifications" className="text-sm sm:text-base text-foreground hover:text-neha-700 transition-colors">Certifications</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 sm:mb-4">Expertise</h4>
              <ul className="space-y-2">
                <li><span className="text-sm sm:text-base text-foreground">Marketing Strategy</span></li>
                <li><span className="text-sm sm:text-base text-foreground">Customer Service</span></li>
                <li><span className="text-sm sm:text-base text-foreground">Sales Management</span></li>
                <li><span className="text-sm sm:text-base text-foreground">CRM Implementation</span></li>
              </ul>
            </div>
            
            <div className="col-span-2 sm:col-span-1 mt-6 sm:mt-0">
              <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 sm:mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="https://www.linkedin.com/in/neha-mishra-0016b3201/" className="text-sm sm:text-base text-foreground hover:text-neha-700 transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-xs sm:text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Neha Mishra. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-neha-100 text-neha-700 hover:bg-neha-200 transition-colors"
          >
            <ArrowUp size={16} className="sm:size-20" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
