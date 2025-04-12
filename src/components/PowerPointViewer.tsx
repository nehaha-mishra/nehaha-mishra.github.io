import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Maximize2, Play, Pause } from 'lucide-react';

interface PowerPointViewerProps {
  title: string;
  description: string;
  googleSlidesId: string;
}

const PowerPointViewer = ({ title, description, googleSlidesId }: PowerPointViewerProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const viewerUrl = `https://docs.google.com/presentation/d/${googleSlidesId}/embed?start=${isPlaying ? 'true' : 'false'}&loop=false&delayms=3000`;

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="section-padding">
      <div className="container mx-auto px-0 sm:px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 px-4 sm:px-0"
          >
            <h2 className="section-title mb-3 sm:mb-4">{title}</h2>
            <p className="section-subtitle max-w-2xl mx-auto text-sm sm:text-base">{description}</p>
          </motion.div>

          <motion.div 
            className={`glass rounded-none sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
              isFullscreen ? 'fixed inset-0 z-50 m-0' : 'relative'
            }`}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex gap-2 z-10">
              <button
                onClick={togglePlay}
                className="p-1.5 sm:p-2 bg-white/80 dark:bg-gray-800/80 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors duration-200"
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause size={16} className="sm:w-5 sm:h-5" /> : <Play size={16} className="sm:w-5 sm:h-5" />}
              </button>
              <button
                onClick={toggleFullscreen}
                className="p-1.5 sm:p-2 bg-white/80 dark:bg-gray-800/80 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors duration-200"
                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              >
                <Maximize2 size={16} className="sm:w-5 sm:h-5" />
              </button>
            </div>

            <div className={`aspect-video w-full ${isFullscreen ? 'h-screen' : ''}`}>
              <iframe
                src={viewerUrl}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                title={title}
              />
            </div>
            
            <div className="p-3 sm:p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-t border-border dark:border-border-dark">
              <div className="flex justify-center">
                <a
                  href={`https://docs.google.com/presentation/d/${googleSlidesId}/edit`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-neha-600 text-white rounded-lg hover:bg-neha-700 transition-colors duration-300 text-sm sm:text-base"
                >
                  <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                  Open in Google Slides
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PowerPointViewer; 