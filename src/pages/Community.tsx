import React from 'react';
import { MessageSquare, Users, ThumbsUp } from 'lucide-react';

export function Community() {
  const discussions = [
    {
      id: 1,
      title: 'Getting started with Smart Contracts',
      author: 'Alice',
      replies: 23,
      likes: 45,
      timestamp: '2h ago'
    },
    {
      id: 2,
      title: 'Best practices for DeFi development',
      author: 'Bob',
      replies: 15,
      likes: 32,
      timestamp: '4h ago'
    },
    {
      id: 3,
      title: 'Understanding blockchain scalability',
      author: 'Charlie',
      replies: 8,
      likes: 19,
      timestamp: '6h ago'
    }
  ];

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Community</h1>
        <p className="text-gray-600 mt-2">Connect with fellow blockchain enthusiasts</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-4">
          {discussions.map((discussion) => (
            <div
              key={discussion.id}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer"
            >
              <h3 className="text-lg font-semibold mb-2">{discussion.title}</h3>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <span>Posted by {discussion.author}</span>
                <span>{discussion.timestamp}</span>
              </div>
              <div className="flex items-center mt-4 space-x-6">
                <div className="flex items-center text-gray-500">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  <span>{discussion.replies} replies</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <ThumbsUp className="w-4 h-4 mr-2" />
                  <span>{discussion.likes} likes</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Community Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-blue-500 mr-2" />
                  <span>Members</span>
                </div>
                <span className="font-medium">1,234</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MessageSquare className="w-5 h-5 text-green-500 mr-2" />
                  <span>Discussions</span>
                </div>
                <span className="font-medium">567</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}