import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Calendar, BookOpen, Users, Trophy } from 'lucide-react';
import { CourseCard } from '../components/CourseCard';
import { ProgressTracker } from '../components/ProgressTracker';
import { courses } from '../data/courses';

export function Dashboard() {
  const navigate = useNavigate();

  const announcements = [
    {
      id: 1,
      title: "New Course: Advanced DeFi Concepts",
      date: "March 15, 2024",
      type: "course"
    },
    {
      id: 2,
      title: "Live Workshop: Smart Contract Security",
      date: "March 20, 2024",
      type: "event"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Blockchain Developer",
      content: "This platform helped me transition from Web2 to Web3 development seamlessly.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "DeFi Researcher",
      content: "The structured learning path made complex blockchain concepts easy to understand.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Important Information Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Welcome to Web3 Academy</h2>
            <p className="text-blue-100 mb-4">Start your journey into blockchain technology and cryptocurrency</p>
            <button 
              onClick={() => navigate('/courses')}
              className="px-6 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Explore Courses
            </button>
          </div>
          <div className="hidden md:block">
            <BookOpen className="w-16 h-16 text-blue-200" />
          </div>
        </div>
      </div>

      {/* Quick Access Menu */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Trophy className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold">My Progress</h3>
              <p className="text-sm text-gray-600">Track your achievements</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold">Upcoming Events</h3>
              <p className="text-sm text-gray-600">View schedule</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold">Community</h3>
              <p className="text-sm text-gray-600">Connect with peers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Courses */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Featured Courses</h2>
          <button 
            onClick={() => navigate('/courses')}
            className="text-blue-600 hover:text-blue-700"
          >
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.slice(0, 6).map((course) => (
            <CourseCard 
              key={course.id} 
              course={course}
              onClick={() => navigate(`/courses/${course.id}`)}
            />
          ))}
        </div>
      </section>

      {/* Announcements and Resources */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Latest Announcements</h2>
            <div className="space-y-4">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <Bell className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">{announcement.title}</h3>
                    <p className="text-sm text-gray-600">{announcement.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Student Success Stories</h2>
            <div className="space-y-4">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{testimonial.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}