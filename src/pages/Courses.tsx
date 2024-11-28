import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CourseCard } from '../components/CourseCard';
import { courses } from '../data/courses';

export function Courses() {
  const navigate = useNavigate();

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">All Courses</h1>
        <p className="text-gray-600 mt-2">Browse our comprehensive Web3 curriculum</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onClick={() => navigate(`/courses/${course.id}`)}
          />
        ))}
      </div>
    </div>
  );
}