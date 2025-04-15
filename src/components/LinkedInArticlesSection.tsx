import React, { useEffect, useState } from "react";

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
    <section id="articles" className="section-padding bg-gray-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-12 text-2xl font-bold">LinkedIn Articles</h2>
          <div className="space-y-8">
            {articles.map((article) => (
              <div key={article.id} className="rounded-lg border p-6 shadow-sm bg-white dark:bg-zinc-800">
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-blue-700 hover:underline">
                  {article.title}
                </a>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{article.summary}</p>
                <div className="mt-2 text-sm text-gray-500">Published: {article.publishedAt}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInArticlesSection;
