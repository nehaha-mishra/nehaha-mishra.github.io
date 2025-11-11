import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Mock data for demonstration. Replace this with real API fetching logic as needed.
const myArticles = [
  {
    id: 1,
    title: "Social Media Manager’s Guide to Staying Ahead",
    url: "https://www.linkedin.com/pulse/social-media-managers-guide-staying-ahead-neha-mishra-kp1oc",
    summary: "A comprehensive guide for social media managers to stay ahead in the evolving digital landscape, by Neha Mishra.",
    publishedAt: "2025-04-01",
  },
  {
    id: 2,
    title: "Now it’s Clearance, Soon Bays Rise",
    url: "https://www.linkedin.com/pulse/now-its-clearance-soon-bays-rise-neha-mishra-nkzgc/?trackingId=PpX0gYU3QOeyagnHFzQrbw%3D%3D",
    summary: "An update from Neha Mishra on upcoming changes and opportunities—'Now it’s Clearance, Soon Bays Rise'.",
    publishedAt: "2025-03-28",
  },
  {
    id: 3,
    title: "Green Flags for Your Content",
    url: "https://www.linkedin.com/pulse/green-flags-your-content-neha-mishra-eg95c/?trackingId=PpX0gYU3QOeyagnHFzQrbw%3D%3D",
    summary: "Neha Mishra shares insights on what positive signs to look for in your content strategy.",
    publishedAt: "2024-02-10",
  },
];

const LinkedInArticlesSection: React.FC = () => {
  const [articles, setArticles] = useState(myArticles);

  return (
    <section id="articles" className="section-padding bg-gradient-to-br from-neha-50/30 via-white to-neha-50/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="section-title text-center mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            LinkedIn Articles
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Insights and perspectives on marketing, content strategy, and professional growth
          </motion.p>
          <div className="space-y-6">
            {articles.map((article, index) => (
              <motion.div 
                key={article.id} 
                className="glass rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neha-100/50 group transform hover:-translate-y-1"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-neha-700 group-hover:text-neha-800 transition-colors mb-2 flex items-center gap-2">
                        {article.title}
                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="mt-2 text-muted-foreground leading-relaxed">{article.summary}</p>
                      <div className="mt-3 text-sm text-neha-600 font-medium">Published: {new Date(article.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInArticlesSection;
