import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import { Contact, ResumeSection } from '@/components/Contact';
import Footer from '@/components/Footer';
import LinkedInArticlesSection from '@/components/LinkedInArticlesSection';
import { HeroDockProvider } from '@/context/HeroDockContext';

const Index = () => {
  useEffect(() => {
    // Ensure smooth scroll behavior for hash links
    const handleHashLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      if (target.tagName === 'A') {
        const link = target as HTMLAnchorElement;
        const href = link.getAttribute('href');
        
        if (href && href.startsWith('#') && href !== '#') {
          event.preventDefault();
          const targetElement = document.querySelector(href);
          
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
            
            // Update URL without scrolling
            history.pushState(null, '', href);
          }
        }
      }
    };
    
    document.addEventListener('click', handleHashLinkClick);
    
    return () => {
      document.removeEventListener('click', handleHashLinkClick);
    };
  }, []);

  return (
    <HeroDockProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        
        <main>
          <Hero />
          
          <section id="about" className="section-padding">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <motion.h2 
                  className="section-title text-center mb-12"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  About Me
                </motion.h2>
                
                <motion.div 
                  className="glass p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="space-y-6">
                    <motion.p 
                      className="text-lg leading-relaxed"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      I am a strategic marketing communications professional with expertise in customer relationship management, digital marketing, and sales strategy. Currently working as an Independent Consultant at HubSpot, I help businesses implement effective marketing solutions that drive growth and enhance customer engagement.
                    </motion.p>
                    
                    <motion.p 
                      className="text-lg leading-relaxed"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      With a background in customer service and sales management at the British Council, I have developed a strong foundation in building trusting relationships and expanding business opportunities. My educational journey includes Strategic Marketing Communication at Conestoga College and a Bachelor of Business Administration (BBA) from Shri Shikshayatan College.
                    </motion.p>
                    
                    <motion.p 
                      className="text-lg leading-relaxed"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      I enjoy analyzing data to improve marketing strategies and customer engagement, and I'm passionate about creative thinking and implementing new concepts. My approach combines analytical thinking with creative problem-solving to deliver impactful marketing solutions.
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <LinkedInArticlesSection />

          <section id="background" className="section-padding">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <motion.h2
                  className="section-title text-center mb-12"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Background
                </motion.h2>
                <div className="space-y-12">
                  <Timeline />
                  <Skills />
                  <Certifications />
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="section-padding bg-gradient-to-br from-white via-neha-50 to-zinc-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto rounded-2xl shadow-xl bg-white/80 dark:bg-zinc-900/80 p-8 md:p-12 border border-neha-100 dark:border-zinc-800">
                <motion.h2
                  className="section-title text-center mb-12 text-3xl md:text-4xl font-extrabold text-neha-700 dark:text-neha-300 drop-shadow"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Projects
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold mb-4 text-center text-neha-700 dark:text-neha-200">Media Kit</h3>
                    <div className="rounded-lg overflow-hidden shadow-lg border border-neha-100 dark:border-zinc-700 bg-white dark:bg-zinc-800 w-full relative group">
                      {/* Maximize or Open overlay button */}
                      <button
                        type="button"
                        aria-label="Maximize or Open PDF"
                        className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-neha-100 text-neha-700 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-neha-100 rounded-full p-2 shadow transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neha-500"
                        onClick={() => {
                          const isMobile = typeof window !== 'undefined' && (window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent));
                          const pdfUrl = "/Media%20Kit_KW%20Legacy.pdf#toolbar=0&navpanes=0&scrollbar=0&view=fitH";
                          if (isMobile) {
                            window.open(pdfUrl, '_blank', 'noopener,noreferrer');
                          } else {
                            const elem = document.getElementById('media-kit-pdf-iframe');
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
                        <span className="sr-only">{typeof window !== 'undefined' && (window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent)) ? 'Open PDF in new tab' : 'Maximize PDF'}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="inline-block">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" />
                        </svg>
                      </button>
                      <iframe
                        id="media-kit-pdf-iframe"
                        src="/Media%20Kit_KW%20Legacy.pdf#toolbar=0&navpanes=0&scrollbar=0&view=fitH"
                        title="Media Kit PDF"
                        width="100%"
                        height="600"
                        className="w-full min-h-[400px] max-h-[600px] bg-gray-50 dark:bg-zinc-900"
                        style={{ 
                          overflow: 'hidden',
                          msOverflowStyle: 'none',
                          scrollbarWidth: 'none',
                          border: 'none'
                        }}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold mb-4 text-center text-neha-700 dark:text-neha-200">Media Release</h3>
                    <div className="rounded-lg overflow-hidden shadow-lg border border-neha-100 dark:border-zinc-700 bg-white dark:bg-zinc-800 w-full relative group">
                      {/* Maximize or Open overlay button */}
                      <button
                        type="button"
                        aria-label="Maximize or Open PDF"
                        className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-neha-100 text-neha-700 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-neha-100 rounded-full p-2 shadow transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neha-500"
                        onClick={() => {
                          const isMobile = typeof window !== 'undefined' && (window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent));
                          const pdfUrl = "/Media%20releases.pdf#toolbar=0&navpanes=0&scrollbar=0&view=fitH";
                          if (isMobile) {
                            window.open(pdfUrl, '_blank', 'noopener,noreferrer');
                          } else {
                            const elem = document.getElementById('media-release-pdf-iframe');
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
                        <span className="sr-only">{typeof window !== 'undefined' && (window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent)) ? 'Open PDF in new tab' : 'Maximize PDF'}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="inline-block">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" />
                        </svg>
                      </button>
                      <iframe
                        id="media-release-pdf-iframe"
                        src="/Media%20releases.pdf#toolbar=0&navpanes=0&scrollbar=0&view=fitH"
                        title="Media Release PDF"
                        width="100%"
                        height="600"
                        className="w-full min-h-[400px] max-h-[600px] bg-gray-50 dark:bg-zinc-900"
                        style={{ 
                          overflow: 'hidden',
                          msOverflowStyle: 'none',
                          scrollbarWidth: 'none',
                          border: 'none'
                        }}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ResumeSection />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </HeroDockProvider>
  );
};

export default Index;
