import React, { createContext, useContext, useState } from 'react';

interface NavigationContextType {
  isExpanded: boolean;
  toggleSidebar: () => void;
}

const NavigationContext = createContext<NavigationContextType>({} as NavigationContextType);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <NavigationContext.Provider value={{ isExpanded, toggleSidebar }}>
      {children}
    </NavigationContext.Provider>
  );
}

export const useNavigation = () => useContext(NavigationContext);