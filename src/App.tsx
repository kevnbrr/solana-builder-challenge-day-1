import React from 'react';
import { Navigation } from './components/Navigation';
import { CourseCard } from './components/CourseCard';
import { LessonContent } from './components/LessonContent';
import { ProgressTracker } from './components/ProgressTracker';
import { courses } from './data/courses';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="ml-64 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to Web3 Academy</h1>
          <p className="text-gray-600 mt-2">Master blockchain technology and cryptocurrency through interactive learning</p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard 
                key={course.id} 
                course={course}
                onClick={() => console.log(`Selected course: ${course.id}`)}
              />
            ))}
          </div>
        </section>

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <LessonContent lesson={courses[0].modules[0].lessons[0]} />
          </div>
          <div>
            <ProgressTracker course={courses[0]} progress={35} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;