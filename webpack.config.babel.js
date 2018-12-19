import webpack from 'webpack'
import GasPlugin from 'gas-webpack-plugin'
import Es3ifyPlugin from 'es3ify-webpack-plugin'
import path from 'path'

export default {
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, './src'),
  entry: {
    server: './Server/index.js',
    client: './Client/client.jsx'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, './build')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  node: {
    global: true,
    process: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-transform-runtime']
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
          plugins: ['@babel/transform-react-jsx']
        }
      }
    ],
  },

  plugins: [
    new GasPlugin(),
    new Es3ifyPlugin(),
    new webpack.EnvironmentPlugin(['NODE_ENV'])
  ],
};
