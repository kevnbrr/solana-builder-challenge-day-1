import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Rocket, Shield, Users } from 'lucide-react';

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-8 lg:mb-0">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
              Master Blockchain Technology
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-lg">
              Join thousands of students learning blockchain development, DeFi, and Web3 through interactive courses and hands-on projects.
            </p>
            <div className="mt-8 flex gap-4">
              <button
                onClick={() => navigate('/courses')}
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Start Learning
              </button>
              <button
                onClick={() => navigate('/courses/blockchain-fundamentals')}
                className="px-8 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                View Demo
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="bg-blue-700 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
              <Rocket className="w-8 h-8 text-blue-200 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Learn by Doing</h3>
              <p className="text-blue-100">Interactive exercises and real-world projects</p>
            </div>
            <div className="bg-blue-700 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
              <Shield className="w-8 h-8 text-blue-200 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Expert-Led Content</h3>
              <p className="text-blue-100">Courses created by industry professionals</p>
            </div>
            <div className="bg-blue-700 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm sm:col-span-2">
              <Users className="w-8 h-8 text-blue-200 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Community Driven</h3>
              <p className="text-blue-100">Learn alongside peers and get help when needed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}