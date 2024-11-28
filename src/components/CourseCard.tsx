import React from 'react';
import { Clock, BookOpen } from 'lucide-react';
import type { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onClick: () => void;
}

export function CourseCard({ course, onClick }: CourseCardProps) {
  const getLevelColor = (level: Course['level']) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        
        <div className="flex items-center gap-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(course.level)}`}>
            {course.level}
          </span>
          
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="w-4 h-4 mr-1" />
            {course.duration} mins
          </div>
          
          <div className="flex items-center text-gray-500 text-sm">
            <BookOpen className="w-4 h-4 mr-1" />
            {course.modules.length} modules
          </div>
        </div>
      </div>
    </div>
  );
}