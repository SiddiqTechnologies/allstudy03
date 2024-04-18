import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.siddiqtechnologies.allguides',
  appName: 'allstudy03',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    LiveUpdates: {
      appId: '72974176',
      channel: 'Production',
      autoUpdateMethod: 'background',
      maxVersions: 2
    }
  }
};

export default config;
