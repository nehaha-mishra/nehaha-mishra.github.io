
import { useEffect, useRef } from 'react';

interface TimelineItem {
  id: string;
  company: string;
  logo: string;
  role: string;
  period: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    id: "hubspot",
    company: "HubSpot",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQF8H-SLmMDZlA/company-logo_400_400/company-logo_400_400/0/1646683330132/hubspot_logo?e=1748476800&v=beta&t=05-v02oolOrvFjlRxpjEctRMhTZOxkoRkCmFYVZhrMw",
    role: "Independent Consultant",
    period: "Present",
    description: "Working as an independent consultant specializing in implementing HubSpot CRM solutions, developing marketing strategies, and optimizing customer journeys for clients."
  },
  {
    id: "british-council",
    company: "British Council",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQEbgQMpvEqVNw/company-logo_400_400/company-logo_400_400/0/1630560502099/british_council_logo?e=1748476800&v=beta&t=d0YHWD2Almmz4eRk-leY93ZsCdgkrL4WonxJiu3hirk",
    role: "Customer Service and Sales Manager",
    period: "Previous",
    description: "Led customer service and sales initiatives, resulting in significant improvements in customer satisfaction and sales performance. Recipient of the Top Salesperson Award in 2023."
  },
  {
    id: "conestoga",
    company: "Conestoga College",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGkyy7hVgi8SA/company-logo_400_400/company-logo_400_400/0/1631357894796/conestoga_college_logo?e=1748476800&v=beta&t=KT1X9iqjAYOjqeBP7SJv1H4zMP1AM4-gNN9LeggkE9I",
    role: "Strategic Marketing Communication",
    period: "Education",
    description: "Studied Strategic Marketing Communication, developing expertise in integrated marketing strategies, digital communication channels, and marketing analytics."
  },
  {
    id: "shri-shikshayatan",
    company: "Shri Shikshayatan College",
    logo: "https://media.licdn.com/dms/image/v2/C510BAQE3XlZIvu1DFA/company-logo_400_400/company-logo_400_400/0/1630588489769/shri_shikshayatan_college_logo?e=1748476800&v=beta&t=soFdlOU5sysU91dTZ4wovT5EJE5ZA0rr8tgikUGacuo",
    role: "Bachelor of Business Administration (BBA)",
    period: "Education",
    description: "Completed Bachelor of Business Administration with high academic achievement, recognized as a University Rank Holder from Calcutta University in 2017."
  }
];

const Timeline = () => {
  const timelineItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    timelineItemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      timelineItemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">Professional Journey</h2>
        <p className="section-subtitle text-center">
          A timeline of my professional experience and educational background
        </p>

        <div className="max-w-4xl mx-auto mt-16 relative">
          {/* Timeline line */}
          <div className="timeline-line"></div>

          {/* Timeline items */}
          <div className="space-y-12 ml-6">
            {timelineData.map((item, index) => (
              <div 
                key={item.id}
                ref={el => timelineItemsRef.current[index] = el}
                className="relative opacity-0"
              >
                <div className="timeline-dot"></div>
                <div 
                  className={`glass rounded-xl p-6 ml-4 sm:ml-8 transition-transform duration-300 hover:shadow-md hover:-translate-y-1`}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-1 shadow-sm">
                      <img 
                        src={item.logo} 
                        alt={item.company} 
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{item.role}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm">
                        <span className="font-medium text-neha-700">{item.company}</span>
                        <span className="hidden sm:inline text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{item.period}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
