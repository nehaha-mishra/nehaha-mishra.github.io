import { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  proficiency: number; // 0-100
  icon: string;
}

const skillsData: Skill[] = [
  { name: "LinkedIn Advertising", proficiency: 95, icon: "📊" },
  { name: "Strategic Planning", proficiency: 90, icon: "📈" },
  { name: "Marketing Strategy", proficiency: 92, icon: "🎯" },
  { name: "Social Media Communications", proficiency: 88, icon: "💬" },
  { name: "Customer Service", proficiency: 94, icon: "👥" },
  { name: "Team Leadership", proficiency: 85, icon: "👑" },
  { name: "Customer Relationship Management", proficiency: 90, icon: "🤝" },
  { name: "Salesforce.com", proficiency: 82, icon: "💼" },
  { name: "Digital Marketing", proficiency: 88, icon: "📱" },
];

const Skills = () => {
  const skillsRef = useRef<(HTMLDivElement | null)[]>([]);

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
          entry.target.classList.remove('opacity-0'); // Ensure visibility
          
          // Animate skill progress bars when visible
          const progressEl = entry.target.querySelector('.skill-progress') as HTMLElement;
          if (progressEl) {
            setTimeout(() => {
              progressEl.style.transform = 'scaleX(1)';
            }, 300);
          }
          
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    skillsRef.current.forEach((item) => {
      if (item) {
        observer.observe(item);
        // Fallback to ensure visibility if observer fails
        item.classList.add('opacity-100');
      }
    });

    return () => {
      skillsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-24 bg-neha-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 sm:mb-6 md:mb-10 text-center">Expertise & Skills</h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-12 text-center">
          Specialized skills and competencies developed throughout my professional journey
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {skillsData.map((skill, index) => (
            <div 
              key={skill.name}
              ref={el => skillsRef.current[index] = el}
              className="skill-card glass p-4 sm:p-6 rounded-xl opacity-0 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl mr-2 sm:mr-3">{skill.icon}</span>
                <h3 className="text-base sm:text-lg font-semibold">{skill.name}</h3>
              </div>
              
              <div className="skill-bar">
                <div 
                  className="skill-progress"
                  style={{ width: `${skill.proficiency}%` }} 
                ></div>
              </div>
              
              <div className="flex justify-between text-xs sm:text-sm text-muted-foreground mt-2">
                <span>Proficiency</span>
                <span>{skill.proficiency}%</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-16 max-w-4xl mx-auto">
          <div className="glass rounded-xl p-5 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Areas of Specialization</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div className="flex items-start">
                <div className="rounded-lg bg-neha-100 p-2 sm:p-3 text-neha-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" y1="22" x2="12" y2="12"></line></svg>
                </div>
                <div className="ml-3 sm:ml-4">
                  <h4 className="text-base sm:text-lg font-medium">Marketing</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">Strategic campaign planning, digital marketing, content strategy, and brand development.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="rounded-lg bg-neha-100 p-2 sm:p-3 text-neha-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div className="ml-3 sm:ml-4">
                  <h4 className="text-base sm:text-lg font-medium">Customer Service</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">Client relationship building, customer satisfaction strategies, and service excellence.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="rounded-lg bg-neha-100 p-2 sm:p-3 text-neha-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                </div>
                <div className="ml-3 sm:ml-4">
                  <h4 className="text-base sm:text-lg font-medium">Sales</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">Sales strategy development, pipeline management, and conversion optimization.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="rounded-lg bg-neha-100 p-2 sm:p-3 text-neha-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </div>
                <div className="ml-3 sm:ml-4">
                  <h4 className="text-base sm:text-lg font-medium">CRM</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">Customer relationship management systems implementation and optimization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
