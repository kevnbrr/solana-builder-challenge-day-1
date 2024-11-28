import React, { createContext, useContext, useEffect, useState } from 'react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';

interface WalletContextType {
  wallet: PhantomWalletAdapter | null;
  connected: boolean;
  publicKey: PublicKey | null;
  balance: number;
  connecting: boolean;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}

const WalletContext = createContext<WalletContextType>({} as WalletContextType);

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [wallet] = useState(() => new PhantomWalletAdapter());
  const [connected, setConnected] = useState(false);
  const [publicKey, setPublicKey] = useState<PublicKey | null>(null);
  const [balance, setBalance] = useState(0);
  const [connecting, setConnecting] = useState(false);

  const connection = new Connection('https://api.mainnet-beta.solana.com');

  useEffect(() => {
    wallet.on('connect', () => {
      setConnected(true);
      setPublicKey(wallet.publicKey);
      updateBalance();
    });

    wallet.on('disconnect', () => {
      setConnected(false);
      setPublicKey(null);
      setBalance(0);
    });

    return () => {
      wallet.disconnect();
    };
  }, [wallet]);

  const updateBalance = async () => {
    if (wallet.publicKey) {
      const balance = await connection.getBalance(wallet.publicKey);
      setBalance(balance / LAMPORTS_PER_SOL);
    }
  };

  const connect = async () => {
    try {
      setConnecting(true);
      await wallet.connect();
    } catch (error) {
      console.error('Failed to connect:', error);
    } finally {
      setConnecting(false);
    }
  };

  const disconnect = async () => {
    try {
      await wallet.disconnect();
    } catch (error) {
      console.error('Failed to disconnect:', error);
    }
  };

  return (
    <WalletContext.Provider value={{
      wallet,
      connected,
      publicKey,
      balance,
      connecting,
      connect,
      disconnect
    }}>
      {children}
    </WalletContext.Provider>
  );
}

export const useWallet = () => useContext(WalletContext);