import React from 'react';
import { useRouteError, useNavigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

export function ErrorBoundary() {
  const error = useRouteError() as { statusText?: string; message?: string };
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Oops!</h1>
        <p className="text-gray-600 mb-6">
          {error.statusText || error.message || 'Something went wrong'}
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Return to Dashboard
        </button>
      </div>
    </div>
  );
}