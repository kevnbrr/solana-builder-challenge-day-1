import React from 'react';
import { Trophy } from 'lucide-react';
import type { Course } from '../types';

interface ProgressTrackerProps {
  course: Course;
  progress: number;
}

export function ProgressTracker({ course, progress }: ProgressTrackerProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Course Progress</h3>
        <Trophy className={`w-6 h-6 ${progress === 100 ? 'text-yellow-400' : 'text-gray-400'}`} />
      </div>
      
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
              {progress}% Complete
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
          <div 
            style={{ width: `${progress}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-500"
          />
        </div>
      </div>
      
      <div className="text-sm text-gray-600">
        {course.modules.length} modules • {course.duration} minutes
      </div>
    </div>
  );
}