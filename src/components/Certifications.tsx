
import { useEffect, useRef } from 'react';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  type: "certification" | "award";
}

const certificationsData: Certificate[] = [
  {
    id: "hubspot-linkedin",
    title: "HubSpot x LinkedIn Ambassador Program",
    issuer: "HubSpot & LinkedIn",
    year: "2023",
    type: "certification"
  },
  {
    id: "top-sales",
    title: "Top Salesperson Award",
    issuer: "British Council",
    year: "2023",
    type: "award"
  },
  {
    id: "rank-holder",
    title: "University Rank Holder",
    issuer: "Calcutta University",
    year: "2017",
    type: "award"
  }
];

const Certifications = () => {
  const certRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-scale-in');
          entry.target.classList.remove('opacity-0'); // Ensure visibility
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    certRefs.current.forEach((item) => {
      if (item) {
        observer.observe(item);
        // Fallback to ensure visibility if observer fails
        item.classList.add('opacity-100');
      }
    });

    return () => {
      certRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="certifications" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">Achievements & Certifications</h2>
        <p className="section-subtitle text-center">
          Recognition and professional qualifications throughout my career
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certificationsData.map((cert, index) => (
            <div 
              key={cert.id}
              ref={el => certRefs.current[index] = el}
              className="glass rounded-xl p-6 text-center opacity-0 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4">
                {cert.type === "certification" ? (
                  <div className="w-16 h-16 mx-auto bg-neha-100 rounded-full flex items-center justify-center text-neha-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                  </div>
                ) : (
                  <div className="w-16 h-16 mx-auto bg-neha-100 rounded-full flex items-center justify-center text-neha-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>
                  </div>
                )}
              </div>
              
              <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
              <p className="text-muted-foreground text-sm mb-1">{cert.issuer}</p>
              <p className="text-neha-600 font-medium">{cert.year}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="glass rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Additional Accreditations</h3>
            <p className="text-muted-foreground text-center mb-8">
              I continuously enhance my skills through professional certifications and industry training programs.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-neha-50 p-4 rounded-lg text-center">
                <h4 className="font-medium">Digital Marketing</h4>
                <p className="text-sm text-muted-foreground">Certified Specialist</p>
              </div>
              
              <div className="bg-neha-50 p-4 rounded-lg text-center">
                <h4 className="font-medium">Social Media Strategy</h4>
                <p className="text-sm text-muted-foreground">Advanced Certification</p>
              </div>
              
              <div className="bg-neha-50 p-4 rounded-lg text-center">
                <h4 className="font-medium">CRM Implementation</h4>
                <p className="text-sm text-muted-foreground">Professional Certification</p>
              </div>
              
              <div className="bg-neha-50 p-4 rounded-lg text-center">
                <h4 className="font-medium">Sales Management</h4>
                <p className="text-sm text-muted-foreground">Leadership Certification</p>
              </div>
              
              <div className="bg-neha-50 p-4 rounded-lg text-center">
                <h4 className="font-medium">Customer Experience</h4>
                <p className="text-sm text-muted-foreground">Service Excellence</p>
              </div>
              
              <div className="bg-neha-50 p-4 rounded-lg text-center">
                <h4 className="font-medium">Market Analysis</h4>
                <p className="text-sm text-muted-foreground">Research Methodology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
