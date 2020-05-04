import { resolve } from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export default {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  mode: 'production',
  output: {
    filename: 'index.js',
    path: resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs',
  },
  module: {
    rules: [{ test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/ }],
  },
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    compress: true,
    hot: true,
    writeToDisk: true,
  },
  resolve: {
    extensions: ['.wasm', '.ts', '.tsx', '.mjs', '.cjs', '.js', '.json'],
    modules: ['src', 'node_modules'],
  },
  plugins: [new CleanWebpackPlugin()],
};
