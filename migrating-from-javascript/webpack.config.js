/**
 * typescript与webpack集成]
 * 混合编译Javascript和Typescript
 */
const path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist")
  },
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["babel-preset-react"]
        }
      },
      {
        test: /\.js?$/,
        use: "source-map-loader",
        enforce: "pre"
      }
    ]
  }
};
