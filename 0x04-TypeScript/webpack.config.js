const path = require('path');

module.exports = {
  entry: './src/index.ts', // Entry point of your TypeScript code
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  resolve: {
    extensions: ['.ts', '.js'], // Resolve these extensions
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Apply this rule to TypeScript files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'source-map', // For debugging
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'), // Serve content from 'dist' directory
    compress: true,
    port: 9000, // Port for the dev server
  },
  mode: 'development', // Change to 'production' for production builds
};
