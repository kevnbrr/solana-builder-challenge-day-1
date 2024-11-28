import React, { useEffect } from 'react';
import { Menu, Home, BookOpen, Award, Users, MessageCircle, ChevronLeft } from 'lucide-react';
import { useNavigation } from './NavigationContext';
import { NavItem } from './NavItem';

export function Navigation() {
  const { isExpanded, toggleSidebar } = useNavigation();

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'b') {
        e.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [toggleSidebar]);

  return (
    <nav
      className={`
        fixed top-0 left-0 h-full bg-gray-900 text-white
        transition-all duration-300 ease-in-out
        ${isExpanded ? 'w-64' : 'w-20'}
      `}
      aria-label="Main navigation"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className="flex items-center gap-2 overflow-hidden">
            <BookOpen className="w-8 h-8 text-blue-400 flex-shrink-0" />
            {isExpanded && (
              <h1 className="text-xl font-bold truncate transition-opacity duration-200">
                Web3 Academy
              </h1>
            )}
          </div>
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
            title={`${isExpanded ? 'Collapse' : 'Expand'} sidebar (Ctrl+B)`}
          >
            <ChevronLeft className={`w-5 h-5 transition-transform duration-200 ${
              !isExpanded ? 'rotate-180' : ''
            }`} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-3">
          <div className="space-y-2">
            <NavItem icon={<Home className="w-5 h-5" />} text="Dashboard" to="/" end />
            <NavItem icon={<BookOpen className="w-5 h-5" />} text="Courses" to="/courses" />
            <NavItem icon={<Award className="w-5 h-5" />} text="Achievements" to="/achievements" />
            <NavItem icon={<Users className="w-5 h-5" />} text="Community" to="/community" />
            <NavItem icon={<MessageCircle className="w-5 h-5" />} text="Discussions" to="/discussions" />
          </div>
        </div>
      </div>
    </nav>
  );
}