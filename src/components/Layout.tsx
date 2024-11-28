import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { NavigationProvider } from './Navigation/NavigationContext';
import { Header } from './Header';

export function Layout() {
  return (
    <NavigationProvider>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="transition-all duration-300 ml-[5rem] lg:ml-64">
          <Header />
          <main className="p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </NavigationProvider>
  );
}