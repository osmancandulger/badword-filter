const path = require('path');

module.exports = {
  mode: 'production',
  entry: './app.ts',
  output: {
    path: path.resolve('lib'),
    filename: 'app.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
