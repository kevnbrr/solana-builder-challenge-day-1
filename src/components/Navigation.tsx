import React from 'react';
import { Menu, Home, BookOpen, Award, Users, MessageCircle } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-4">
      <div className="flex items-center gap-2 mb-8">
        <BookOpen className="w-8 h-8 text-blue-400" />
        <h1 className="text-xl font-bold">Web3 Academy</h1>
      </div>
      
      <div className="space-y-2">
        <NavItem icon={<Home />} text="Dashboard" active />
        <NavItem icon={<BookOpen />} text="Courses" />
        <NavItem icon={<Award />} text="Achievements" />
        <NavItem icon={<Users />} text="Community" />
        <NavItem icon={<MessageCircle />} text="Discussions" />
      </div>
    </nav>
  );
}

function NavItem({ icon, text, active = false }: { icon: React.ReactNode; text: string; active?: boolean }) {
  return (
    <div className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
      active ? 'bg-blue-600' : 'hover:bg-gray-800'
    }`}>
      {icon}
      <span>{text}</span>
    </div>
  );
}