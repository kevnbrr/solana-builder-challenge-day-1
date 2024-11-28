import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigation } from './NavigationContext';

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  to: string;
  end?: boolean;
}

export function NavItem({ icon, text, to, end }: NavItemProps) {
  const { isExpanded } = useNavigation();

  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => `
        flex items-center gap-3 p-3 rounded-lg cursor-pointer
        transition-all duration-200 outline-none
        focus-visible:ring-2 focus-visible:ring-blue-500
        ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'}
      `}
    >
      <span className="flex-shrink-0">{icon}</span>
      {isExpanded && (
        <span className="truncate transition-opacity duration-200">
          {text}
        </span>
      )}
    </NavLink>
  );
}