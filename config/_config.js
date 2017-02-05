module.exports = {
  port: 3000,
  PATHS: {
    entry: {
      'assets/js/': 'assets/js/base.js',
    },
    output: {
      html: 'dist',
      images: 'dist/assets/images',
      less: 'dist/assets/styles/less',
      css: 'dist/assets/styles/css',
      js: 'dist/assets/js',
      libs: 'dist/assets/libs',
    },
  },
};
