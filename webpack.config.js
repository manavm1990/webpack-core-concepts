// Since version 4.0.0, webpack does not require a configuration file to bundle your project.
// https://webpack.js.org/concepts/

module.exports = {
  // 'entry' should be 1 file
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        // Is it a JPEG file? This could be updated for other images/files, of course.
        test: /\.jpeg$/, // RegEx for file ending in 'JPEG.'
        use: [
          {
            loader: 'url-loader',
          },
          // {
          //   loader: 'imagemin-webpack-plugin',
          // },
        ],
      },
    ],
  },
};
