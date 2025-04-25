import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorStateProps {
  message: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({ message }) => {
  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md my-6">
      <div className="flex items-start">
        <AlertCircle className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
        <div>
          <h3 className="text-lg font-medium text-red-800">Error loading cats</h3>
          <p className="mt-1 text-red-700">{message}</p>
          <p className="mt-3 text-sm text-gray-700">
            Don't worry, we're still showing you some sample cats! 🐱
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorState;