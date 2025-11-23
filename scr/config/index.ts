// File: src/config/index.ts
import Constants from 'expo-constants';

const { expoConfig } = Constants;
const extra = expoConfig?.extra || {};

export const ENV = extra.env || 'development';
export const API_BASE_URL = extra.apiBaseUrl || 'http://localhost:4000';
