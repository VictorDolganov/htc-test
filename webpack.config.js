const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
   mode: 'development',
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index_bundle.js'
   },
   module: {
      rules: [
         {
            test: /\.(js)$/,
            use: 'babel-loader'
         },
         {
            test: /\.(png|jpe?g|gif)$/i,
            use: 'file-loader',
         },
         {
            test: /\.s[ac]ss$/i,
            use: [
               "style-loader",
               "css-loader",
               "sass-loader",
            ],
         },
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/index.html',
      }),
      new CleanWebpackPlugin(),
      new CopyPlugin({
         patterns: [
            { from: __dirname + '/src/assets', to: `assets` },
         ],
      }),
   ],
   devServer: {
      port: 3000,
      contentBase: path.resolve(__dirname, './dist'),
      open: true,
   }
}