// Migration script to update environment variables from CRA to Vite format
// This file contains utility functions to help with the transition

// Helper function to get environment variables with backward compatibility
export const getEnvVar = (key) => {
  // Try Vite format first
  if (import.meta.env[`VITE_${key}`]) {
    return import.meta.env[`VITE_${key}`];
  }
  
  // Fallback to legacy format if exists
  if (process.env[`REACT_APP_${key}`]) {
    return process.env[`REACT_APP_${key}`];
  }
  
  // Default values
  const defaults = {
    'URL': 'https://startupfestgujarat.com',
    'RAZORPAY_KEY_ID': 'rzp_live_ST3UBESEnYNzQt',
    'RAZORPAY_KEY_SECRET': 'iRENGHMKNccDx43MP1DwbZFu'
  };
  
  return defaults[key] || '';
};

// Environment configuration
export const ENV_CONFIG = {
  API_URL: getEnvVar('URL'),
  RAZORPAY_KEY_ID: getEnvVar('RAZORPAY_KEY_ID'),
  RAZORPAY_KEY_SECRET: getEnvVar('RAZORPAY_KEY_SECRET'),
  NODE_ENV: import.meta.env.MODE || 'development'
};

export default ENV_CONFIG;