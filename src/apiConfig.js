// This file centralizes the API configuration for the frontend.
// It uses Vite's environment variable handling.
// In development, it defaults to the local backend server.
// In a production build, it uses the URL specified in the VITE_API_URL environment variable.

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';