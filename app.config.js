// File: app.config.js
export default ({ config }) => {
  const ENV = process.env.APP_ENV || 'development';

  return {
    expo: {
      name: 'CreditEducate',
      slug: 'crediteducate',
      version: '0.1.0',

      platforms: ['ios', 'android', 'web'],

      extra: {
        env: ENV,
        apiBaseUrl:
          ENV === 'production'
            ? 'https://api.crediteducate.com'
            : 'http://localhost:4000',
      },

      orientation: 'portrait',

      icon: './assets/icon.png',
      splash: {
        image: './assets/splash.png',
        resizeMode: 'contain',
        backgroundColor: '#ffffff'
      },

      updates: {
        fallbackToCacheTimeout: 0
      },

      assetBundlePatterns: ['**/*'],

      ios: {
        supportsTablet: true,
        bundleIdentifier:
          ENV === 'production'
            ? 'com.crediteducate.app'
            : 'com.crediteducate.app.dev'
      },

      android: {
        package:
          ENV === 'production'
            ? 'com.crediteducate.app'
            : 'com.crediteducate.app.dev'
      }
    }
  };
};
