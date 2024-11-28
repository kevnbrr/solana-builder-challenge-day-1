import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { LessonContent } from '../components/LessonContent';
import { ProgressTracker } from '../components/ProgressTracker';
import { courses } from '../data/courses';

export function CourseDetail() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  
  const course = courses.find((c) => c.id === courseId);
  
  if (!course) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h2>
        <button
          onClick={() => navigate('/courses')}
          className="text-blue-500 hover:text-blue-600"
        >
          Return to Courses
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">{course.title}</h1>
        <p className="text-gray-600 mt-2">{course.description}</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {course.modules.map((module) => (
            <div key={module.id} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{module.title}</h2>
              {module.lessons.map((lesson) => (
                <div key={lesson.id} className="mb-6">
                  <LessonContent lesson={lesson} />
                </div>
              ))}
            </div>
          ))}
        </div>
        
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <ProgressTracker course={course} progress={35} />
          </div>
        </div>
      </div>
    </div>
  );
}