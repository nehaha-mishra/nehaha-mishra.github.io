import { motion } from 'framer-motion';

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
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-24 bg-neha-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 sm:mb-6 md:mb-10 text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Expertise & Skills
        </motion.h2>
        <motion.p 
          className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-12 text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Specialized skills and competencies developed throughout my professional journey
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {skillsData.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="skill-card glass p-4 sm:p-6 rounded-xl hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl mr-2 sm:mr-3">{skill.icon}</span>
                <h3 className="text-base sm:text-lg font-semibold">{skill.name}</h3>
              </div>
              
              <div className="h-2 bg-neha-100 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-neha-400 to-neha-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: skill.proficiency / 100 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  style={{ transformOrigin: 'left' }}
                />
              </div>
              
              <div className="flex justify-between text-xs sm:text-sm text-muted-foreground mt-2">
                <span>Proficiency</span>
                <span>{skill.proficiency}%</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-10 sm:mt-16 max-w-4xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass rounded-xl p-5 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">Areas of Specialization</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <motion.div 
                className="flex items-start"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="rounded-lg bg-neha-100 p-2 sm:p-3 text-neha-700 ring-2 ring-neha-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l-7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" y1="22" x2="12" y2="12"></line></svg>
                </div>
                <div className="ml-3 sm:ml-4">
                  <h4 className="text-base sm:text-lg font-medium">Marketing</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">Strategic campaign planning, digital marketing, content strategy, and brand development.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="rounded-lg bg-neha-100 p-2 sm:p-3 text-neha-700 ring-2 ring-neha-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div className="ml-3 sm:ml-4">
                  <h4 className="text-base sm:text-lg font-medium">Customer Service</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">Client relationship building, customer satisfaction strategies, and service excellence.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="rounded-lg bg-neha-100 p-2 sm:p-3 text-neha-700 ring-2 ring-neha-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                </div>
                <div className="ml-3 sm:ml-4">
                  <h4 className="text-base sm:text-lg font-medium">Sales</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">Sales strategy development, pipeline management, and conversion optimization.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="rounded-lg bg-neha-100 p-2 sm:p-3 text-neha-700 ring-2 ring-neha-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </div>
                <div className="ml-3 sm:ml-4">
                  <h4 className="text-base sm:text-lg font-medium">CRM</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">Customer relationship management systems implementation and optimization.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
