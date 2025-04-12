import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ResumeSection = () => {
  return (
    <section id="resume" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">My Resume</h2>
          <p className="text-muted-foreground mb-6">View or download my resume to learn more about my professional journey and skills.</p>
          <div className="flex flex-col items-center gap-6">
            <div className="max-w-5xl w-full mx-auto glass rounded-2xl overflow-hidden shadow-lg h-[60vh]"> 
              <iframe 
                src="/Neha's Resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=fitH"
                style={{ 
                  overflow: 'hidden',
                  msOverflowStyle: 'none', // IE and Edge
                  scrollbarWidth: 'none'    // Firefox
                }}
                className="w-full h-full scrollbar-hide" 
                title="Resume Preview"
                frameBorder="0"
              ></iframe>
            </div>
            <a 
              href="/Neha's Resume.pdf" 
              download
              className="px-6 py-3 bg-neha-600 text-white font-medium rounded-lg hover:bg-neha-700 transition-colors shadow-md flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5 7.5m0 0l7.5-7.5m-7.5 7.5V3" />
              </svg>
              Download Resume
            </a>
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
    <section id="contact" className="section-padding bg-neha-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto glass rounded-2xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Contact Info */}
            <div className="bg-neha-700 text-white p-8 md:p-12">
              <div className="h-full flex flex-col">
                <div>
                  <h2 className="text-3xl font-display font-bold mb-6">Get in Touch</h2>
                  <p className="mb-8 text-neha-100">
                    I'm always open to discussing new projects, opportunities, and partnerships. Feel free to reach out!
                  </p>
                </div>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="bg-neha-600 w-10 h-10 rounded-full flex items-center justify-center">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-neha-200">Email</p>
                      <a 
                        href="mailto:nehamishra89818@gmail.com" 
                        className="font-medium text-white hover:text-neha-300 transition-colors contact-link"
                      >
                        nehamishra89818@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <p className="text-sm text-neha-200">
                    Let's connect and explore how we can create impactful marketing strategies together.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-neha-500 focus:border-transparent transition-colors" 
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-neha-500 focus:border-transparent transition-colors" 
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-neha-500 focus:border-transparent transition-colors" 
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                    isSubmitting 
                      ? 'bg-neha-300 cursor-not-allowed' 
                      : 'bg-neha-600 hover:bg-neha-700 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
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
