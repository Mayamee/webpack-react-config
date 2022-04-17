const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const appPath = path.resolve(__dirname, "..", "app");
const { mode } = process.env;
if (!mode) throw new Error("Mode not provided");
const ASSET_PATH = process.env.asset_path ?? "/";
const IS_DEV = mode == "development";
const IS_PROD = mode == "production";
const setupDevTools = () => {
  if (IS_DEV) return "eval";
  if (IS_PROD) return false;
};
module.exports = {
  entry: path.join(appPath, "src", "client", "index.tsx"),
  output: {
    path: path.join(appPath, "dist", "client"),
    filename: "index.js",
    publicPath: "/static/",
  },
  mode: mode,
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ["ts-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  devtool: setupDevTools(),
  plugins: IS_DEV ? [new CleanWebpackPlugin()] : [],
};
