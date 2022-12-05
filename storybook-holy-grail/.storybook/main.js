const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  /** Expose public folder to storybook as static */
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-dark-mode",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  core: {
    builder: "webpack5",
  },
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    config.resolve.extensions.push(".ts", ".tsx");

    // SASS + Tailwdind CSS
    config.module.rules.push({
      test: /\.s(a|c)ss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1, // We always need to apply postcss-loader before css-loader
            modules: {
              auto: /\.module\.scss$/, // true
              localIdentName: "[name]__[local]--[hash:base64:5]",
            },
          },
        },
        {
          loader: "postcss-loader", // required for tailwind
          options: {
            implementation: require("postcss"), // postcss 8
            postcssOptions: {
              config: path.resolve(__dirname, "../postcss.config.js"),
            },
          },
        },
        {
          loader: "sass-loader",
          options: {
            // sourceMap: true,
            implementation: require("sass"), // dart sass
          },
        },
      ],
    });

    return config;
  },
};
