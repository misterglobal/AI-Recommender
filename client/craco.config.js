const path = require('path');

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack: {
    configure: {
      resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      },
    },
  },
};