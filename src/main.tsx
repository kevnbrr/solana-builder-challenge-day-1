import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { WalletProvider } from './contexts/WalletContext';
import { router } from './routes';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WalletProvider>
      <RouterProvider router={router} />
    </WalletProvider>
  </StrictMode>
);