import React from 'react';
import { Github, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} CatToons. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <p className="mr-2">Made with</p>
              <Heart className="h-4 w-4 text-red-500" fill="currentColor" />
              <p className="ml-2">for cat lovers</p>
            </div>
            
            <a 
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Github"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;