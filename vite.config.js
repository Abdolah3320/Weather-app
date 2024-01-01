// vite.config.js
import ViteExternals from 'vite-plugin-externals';

export default {
  plugins: [
    ViteExternals({
      externals: ['axios'], // Add any other external modules if needed
    }),
  ],
};
