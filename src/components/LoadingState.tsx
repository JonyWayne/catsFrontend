import React from 'react';

const LoadingState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="w-24 h-24 relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 animate-spin">
          <div className="h-12 w-12 rounded-full absolute border-8 border-solid border-purple-500 border-t-transparent"></div>
        </div>
      </div>
      <p className="mt-4 text-xl text-gray-600 font-medium">Loading cats...</p>
    </div>
  );
};

export default LoadingState;