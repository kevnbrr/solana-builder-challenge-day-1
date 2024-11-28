import React from 'react';
import { WalletButton } from './WalletButton';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Web3 Academy</h1>
          <WalletButton />
        </div>
      </div>
    </header>
  );
}