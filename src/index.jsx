import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { preloadCriticalResources, registerServiceWorker } from './hooks/usePerformance';

// Preload critical resources
preloadCriticalResources();

// Register service worker for caching
registerServiceWorker();

const root = ReactDOM.createRoot(document.getElementById('root'));

// Use concurrent features for better performance
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Enhanced performance monitoring - Web Vitals removed for now
// Can be re-added later if needed
if (import.meta.env.DEV) {
  console.log('App started in development mode');
}
