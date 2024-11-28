import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { CourseCategories } from '../components/CourseCategories';
import { NewsSection } from '../components/NewsSection';
import { CourseCard } from '../components/CourseCard';
import { courses } from '../data/courses';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();
  const featuredCourses = courses.slice(0, 3);

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <CourseCategories />

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Courses</h2>
            <button
              onClick={() => navigate('/courses')}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View All Courses
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onClick={() => navigate(`/courses/${course.id}`)}
              />
            ))}
          </div>
        </div>
      </section>

      <NewsSection />
    </div>
  );
}