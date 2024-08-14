import path from 'path';

export default {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    static: path.resolve(process.cwd(), 'dist'),
    compress: true,
    port: 9000,
  },
  mode: 'development',
};
