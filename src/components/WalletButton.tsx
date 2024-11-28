import React from 'react';
import { Wallet } from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';

export function WalletButton() {
  const { connected, connecting, connect, disconnect, publicKey, balance } = useWallet();

  return (
    <div className="relative">
      {connected ? (
        <div className="flex items-center gap-4">
          <div className="text-sm">
            <div className="font-medium">{publicKey?.toString().slice(0, 4)}...{publicKey?.toString().slice(-4)}</div>
            <div className="text-gray-500">{balance.toFixed(2)} SOL</div>
          </div>
          <button
            onClick={disconnect}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          onClick={connect}
          disabled={connecting}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
        >
          <Wallet className="w-4 h-4" />
          {connecting ? 'Connecting...' : 'Connect Wallet'}
        </button>
      )}
    </div>
  );
}