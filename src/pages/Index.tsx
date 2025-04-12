import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import { Contact, ResumeSection } from '@/components/Contact';
import Footer from '@/components/Footer';

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
                    I am a strategic marketing professional with expertise in customer relationship management, digital marketing, and sales strategy. Currently working as an Independent Consultant at HubSpot, I help businesses implement effective marketing solutions that drive growth and enhance customer engagement.
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
        
        <Timeline />
        <Skills />
        <Certifications />
        <ResumeSection />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
