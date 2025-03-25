
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto text-center">
          <div className="relative mb-8">
            <div className="text-9xl font-display font-bold text-neha-100">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl font-display font-bold text-foreground">Page Not Found</h1>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          
          <a 
            href="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-neha-600 text-white rounded-lg hover:bg-neha-700 transition-colors"
          >
            <ArrowLeft size={18} />
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
