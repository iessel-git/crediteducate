// File: src/config/index.ts
import Constants from 'expo-constants';

// Extract Expo config at runtime (works on iOS, Android, Web)
const { expoConfig } = Constants;

// "extra" comes from app.config.js
const extra = expoConfig?.extra || {};

export const ENV: string = extra.env || 'development';

export const API_BASE_URL: string =
  extra.apiBaseUrl || 'http://localhost:4000';
