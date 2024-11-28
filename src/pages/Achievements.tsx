import React from 'react';
import { Trophy, Award, Star } from 'lucide-react';

export function Achievements() {
  const achievements = [
    {
      id: 'blockchain-basics',
      title: 'Blockchain Pioneer',
      description: 'Complete the Blockchain Fundamentals course',
      icon: <Trophy className="w-8 h-8 text-yellow-400" />,
      progress: 35,
      unlocked: false
    },
    {
      id: 'first-quiz',
      title: 'Quick Learner',
      description: 'Pass your first quiz with a score of 80% or higher',
      icon: <Star className="w-8 h-8 text-blue-400" />,
      progress: 0,
      unlocked: false
    },
    {
      id: 'community',
      title: 'Community Contributor',
      description: 'Make your first post in the community forum',
      icon: <Award className="w-8 h-8 text-purple-400" />,
      progress: 0,
      unlocked: false
    }
  ];

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Achievements</h1>
        <p className="text-gray-600 mt-2">Track your learning milestones and earn badges</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="bg-white rounded-xl shadow-md p-6 relative overflow-hidden"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-gray-50 rounded-lg">{achievement.icon}</div>
              {achievement.unlocked && (
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  Unlocked
                </span>
              )}
            </div>

            <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
            <p className="text-gray-600 mb-4">{achievement.description}</p>

            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block text-blue-600">
                    {achievement.progress}% Complete
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">
                <div
                  style={{ width: `${achievement.progress}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}