import React from 'react';
import { Cat } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-pink-500 py-6 px-4 sm:px-6 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Cat className="h-10 w-10 text-white" strokeWidth={1.5} />
          <h1 className="text-3xl font-bold text-white">CatToons</h1>
        </div>
        <p className="hidden sm:block text-white italic">The purr-fect cat gallery!</p>
      </div>
    </header>
  );
};

export default Header;