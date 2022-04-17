const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { mode } = process.env;
if (!mode) throw new Error("Mode not provided");
const appPath = path.resolve(__dirname, "..", "app");
module.exports = {
  target: "node",
  mode: mode,
  entry: path.join(appPath, "src", "server", "server.ts"),
  output: {
    path: path.join(appPath, "dist", "server"),
    filename: "server.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  // externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ["ts-loader"],
      },
    ],
  },
  optimization: {
    minimize: mode === "production",
  },
};
