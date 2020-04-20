// Since version 4.0.0, webpack does not require a configuration file to bundle your project.
// https://webpack.js.org/concepts/

module.exports = {
  // 'entry' should be 1 file
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            // Convert to base64 if image is less than 8192.
            // This also uses 'file-loader'.
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
          {
            loader: 'image-webpack-loader', // https://github.com/tcoopman/image-webpack-loader
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },
};
