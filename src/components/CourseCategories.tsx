import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Coins, ShieldCheck, Layers, PaintBucket, Database, BookOpen } from 'lucide-react';

export function CourseCategories() {
  const navigate = useNavigate();

  const categories = [
    {
      id: 'blockchain-fundamentals',
      title: 'Blockchain Fundamentals',
      icon: <Database className="w-6 h-6" />,
      color: 'bg-blue-500',
      courses: 12
    },
    {
      id: 'smart-contracts',
      title: 'Smart Contract Development',
      icon: <Code className="w-6 h-6" />,
      color: 'bg-purple-500',
      courses: 8
    },
    {
      id: 'crypto-trading',
      title: 'Cryptocurrency Trading',
      icon: <Coins className="w-6 h-6" />,
      color: 'bg-green-500',
      courses: 6
    },
    {
      id: 'defi',
      title: 'DeFi Protocols',
      icon: <Layers className="w-6 h-6" />,
      color: 'bg-yellow-500',
      courses: 10
    },
    {
      id: 'nft',
      title: 'NFT Creation & Trading',
      icon: <PaintBucket className="w-6 h-6" />,
      color: 'bg-pink-500',
      courses: 5
    },
    {
      id: 'web3',
      title: 'Web3 Development',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'bg-indigo-500',
      courses: 7
    },
    {
      id: 'security',
      title: 'Blockchain Security',
      icon: <ShieldCheck className="w-6 h-6" />,
      color: 'bg-red-500',
      courses: 4
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Course Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => navigate(`/courses?category=${category.id}`)}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden"
            >
              <div className={`${category.color} p-4 text-white`}>
                {category.icon}
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">{category.title}</h3>
                <p className="text-sm text-gray-600">{category.courses} courses</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}