import { useState } from 'react';
import { Mail, Send, Linkedin, Download, FileText, ArrowUpRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

const ResumeSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section id="resume" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-3 sm:mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Resume
          </motion.h2>
          <motion.p 
            className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            View or download my resume to learn more about my professional journey and skills.
          </motion.p>
          
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <div className="relative w-full max-w-5xl mx-auto">
              <div className="glass rounded-xl sm:rounded-2xl overflow-hidden shadow-lg h-[40vh] sm:h-[50vh] md:h-[60vh] relative group">
                {/* Loading overlay */}
                {isLoading && (
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-10">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-8 h-8 border-4 border-neha-200 border-t-neha-600 rounded-full animate-spin"></div>
                      <p className="text-sm text-muted-foreground">Loading resume...</p>
                    </div>
                  </div>
                )}
                
                {/* Maximize or Open overlay button */}
                <button
                  type="button"
                  aria-label="Maximize or Open PDF"
                  className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-neha-100 text-neha-700 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-neha-100 rounded-full p-2 shadow transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neha-500"
                  onClick={() => {
                    const isMobile = typeof window !== 'undefined' && (window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent));
                    const pdfUrl = "/Neha's Resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=fitH";
                    if (isMobile) {
                      window.open(pdfUrl, '_blank', 'noopener,noreferrer');
                    } else {
                      const elem = document.getElementById('resume-pdf-iframe');
                      if (elem && elem.requestFullscreen) {
                        elem.requestFullscreen();
                      } else if (elem && (elem as any).webkitRequestFullscreen) {
                        (elem as any).webkitRequestFullscreen();
                      } else if (elem && (elem as any).msRequestFullscreen) {
                        (elem as any).msRequestFullscreen();
                      }
                    }
                  }}
                >
                  {/* Icon changes for mobile/desktop */}
                  <span className="sr-only">{typeof window !== 'undefined' && (window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent)) ? 'Open PDF in new tab' : 'Maximize PDF'}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" />
                  </svg>
                </button>
                
                {/* PDF Viewer */}
                <iframe 
                  id="resume-pdf-iframe"
                  src="/Neha's Resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=fitH"
                  style={{ 
                    overflow: 'hidden',
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none',
                    border: 'none'
                  }}
                  className="w-full h-full scrollbar-hide" 
                  title="Resume Preview"
                  frameBorder="0"
                  onLoad={() => setIsLoading(false)}
                />
                
                {/* Controls overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-center gap-4">
                    <a 
                      href="/Neha's Resume.pdf" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white text-foreground rounded-lg hover:bg-neha-50 transition-colors shadow-sm flex items-center gap-2 text-sm"
                    >
                      <ArrowUpRight size={16} />
                      Open in New Tab
                    </a>
                    <a 
                      href="/Neha's Resume.pdf" 
                      download
                      className="px-4 py-2 bg-neha-600 text-white rounded-lg hover:bg-neha-700 transition-colors shadow-sm flex items-center gap-2 text-sm"
                    >
                      <Download size={16} />
                      Download
                    </a>
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      
      toast({
        title: "Message sent successfully",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-neha-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto glass rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Contact Info */}
            <div className="bg-neha-700 text-white p-6 sm:p-8 md:p-12">
              <div className="h-full flex flex-col">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4 sm:mb-6">Get in Touch</h2>
                  <p className="mb-6 sm:mb-8 text-neha-100 text-sm sm:text-base">
                    I'm always open to discussing new projects, opportunities, and partnerships. Feel free to reach out!
                  </p>
                </div>
                
                <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="bg-neha-600 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
                      <Mail size={16} className="sm:size-18" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-neha-200">Email</p>
                      <a 
                        href="mailto:nehamishra89818@gmail.com" 
                        className="font-medium text-sm sm:text-base text-white hover:text-neha-300 transition-colors contact-link"
                      >
                        nehamishra89818@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="bg-neha-600 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
                      <Linkedin size={16} className="sm:size-18" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-neha-200">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/neha-mishra-0016b3201/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-medium text-sm sm:text-base text-white hover:text-neha-300 transition-colors contact-link"
                      >
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <p className="text-xs sm:text-sm text-neha-200">
                    Let's connect and explore how we can create impactful marketing strategies together.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="p-6 sm:p-8 md:p-12">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-neha-500 focus:border-transparent transition-colors text-sm sm:text-base" 
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-neha-500 focus:border-transparent transition-colors text-sm sm:text-base" 
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-neha-500 focus:border-transparent transition-colors text-sm sm:text-base" 
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-colors text-sm sm:text-base ${
                    isSubmitting 
                      ? 'bg-neha-300 cursor-not-allowed' 
                      : 'bg-neha-600 hover:bg-neha-700 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-3 w-3 sm:h-4 sm:w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="inline-block">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} className="sm:size-18" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ResumeSection, Contact };
