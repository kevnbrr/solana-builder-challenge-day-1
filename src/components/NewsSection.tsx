import React from 'react';
import { ExternalLink } from 'lucide-react';

export function NewsSection() {
  const news = [
    {
      id: 1,
      title: 'Latest Developments in Ethereum Layer 2 Solutions',
      source: 'Blockchain Weekly',
      date: 'March 15, 2024',
      url: '#'
    },
    {
      id: 2,
      title: 'Understanding Zero-Knowledge Proofs in DeFi',
      source: 'CryptoNews',
      date: 'March 14, 2024',
      url: '#'
    },
    {
      id: 3,
      title: 'The Rise of Decentralized Social Networks',
      source: 'Web3 Daily',
      date: 'March 13, 2024',
      url: '#'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest in Blockchain</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
            >
              <h3 className="font-semibold mb-2 group-hover:text-blue-600 flex items-center gap-2">
                {item.title}
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <div className="text-sm text-gray-600">
                <span>{item.source}</span>
                <span className="mx-2">•</span>
                <span>{item.date}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}