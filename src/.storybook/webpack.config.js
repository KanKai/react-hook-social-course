const { resolve } = require("path");

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.push(
    {
      test: /\.(css)$/,
      use: ["style-loader", "css-loader"]
    },
    {
      test: /\.(scss)$/,
      // exclude: /node_modules/,
      use: ["style-loader", "css-loader", "sass-loader"]
    }
  );
  if (typeof storybookBaseConfig.resolve.modules !== "object") {
    storybookBaseConfig.resolve.modules = [];
  }
  storybookBaseConfig.resolve.modules.push(resolve(__dirname, "../../src"));
  return storybookBaseConfig;
};
