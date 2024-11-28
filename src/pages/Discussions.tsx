import React from 'react';
import { MessageCircle, Search } from 'lucide-react';

export function Discussions() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Discussions</h1>
        <p className="text-gray-600 mt-2">Join the conversation and learn from others</p>
      </header>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search discussions..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b border-gray-200">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Start New Discussion
          </button>
        </div>

        <div className="divide-y divide-gray-200">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="p-6 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    How to optimize gas fees in smart contracts?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    I'm working on a DeFi project and looking for ways to reduce transaction costs...
                  </p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <span>Posted by User{i}</span>
                    <span>{i}h ago</span>
                    <div className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      <span>{i * 3} replies</span>
                    </div>
                  </div>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Smart Contracts
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}