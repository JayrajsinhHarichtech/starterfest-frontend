// Environment configuration for Vite
// This file helps with the transition from CRA to Vite environment variables

export const config = {
  // API URL - now using VITE_ prefix instead of REACT_APP_
  API_URL: import.meta.env.VITE_APP_URL || 'https://startupfestgujarat.com',
  
  // Razorpay configuration
  RAZORPAY_KEY_ID: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_live_ST3UBESEnYNzQt',
  RAZORPAY_KEY_SECRET: import.meta.env.VITE_RAZORPAY_KEY_SECRET || 'iRENGHMKNccDx43MP1DwbZFu',
  
  // App environment
  NODE_ENV: import.meta.env.MODE || 'development',
  DEV: import.meta.env.DEV,
  PROD: import.meta.env.PROD,
}

// Export for legacy compatibility (to be removed after full migration)
export const REACT_APP_URL = config.API_URL;

// Default export
export default config;