/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli/quasar-conf-js

/* eslint-env node */
const ESLintPlugin = require("eslint-webpack-plugin");
const { configure } = require("quasar/wrappers");
const webpack = require("webpack");
const path = require("path");

const CopyWebpackPlugin = require("copy-webpack-plugin");

const cesiumSource = "node_modules/cesium";
const cesiumBuild = "Build/Cesium";

const cesiumOutput = "cesium";

const BUNDLE_SIZE_LIMIT = 5 * 1024 ** 2; // 5 MB

const basePath = "cartolab/worldtrade"; //change N to your group number


module.exports = configure(function (/* ctx */) {
  return {
    // https://v2.quasar.dev/quasar-cli/supporting-ts
    supportTS: false,

    // https://v2.quasar.dev/quasar-cli/prefetch-feature
    // preFetch: true,

    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // https://v2.quasar.dev/quasar-cli/boot-files
    boot: [],

    // https://v2.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-css
    css: ["app.scss", "animate.css"],

    animations: 'all',

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: [
      // 'ionicons-v4',
      // 'mdi-v5',
      // 'fontawesome-v5',
      // 'eva-icons',
      // 'themify',
      // 'line-awesome',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      //'roboto-font', // optional, you are not bound to it
      "material-icons", // optional, you are not bound to it
    ],

    // Full list of options: https://v2.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-build
    build: {
      vueRouterMode: "history", // available values: 'hash', 'history'
      publicPath: basePath,
      distDir: basePath,
      // transpile: false,

      // Add dependencies for transpiling with Babel (Array of string/regex)
      // (from node_modules, which are by default not transpiled).
      // Applies only if "transpile" is set to true.
      // transpileDependencies: [],

      // rtl: false, // https://v2.quasar.dev/options/rtl-support
      // preloadChunks: true,
      // showProgress: false,
      // gzip: true,
      // analyze: true,

      // Options below are automatically set depending on the env, set them if you want to override
      // extractCSS: false,

      // https://v2.quasar.dev/quasar-cli/handling-webpack
      // "chain" is a webpack-chain object https://github.com/neutrinojs/webpack-chain
      chainWebpack(config) {
        config
          .plugin("eslint-webpack-plugin")
          .use(ESLintPlugin, [{ extensions: ["js", "vue"] }]);

        // prevent errors when transpiling cesium core
        config.module.set("unknownContextCritical", false);
        config.module.set(
          "unknownContextRegExp",
          /\/cesium\/Source\/Core\/buildModuleUrl\.js/
        );
        // drop unused debugging code in cesium when building for production
        if (process.env.NODE_ENV === "production") {
          config.module
            .rule("cesium-strip-pragma")
            .test(/\.js$/)
            .pre()
            .include.add(path.resolve(__dirname, cesiumSource))
            .end()
            .sideEffects(false)
            .use("strip-pragma")
            .loader("strip-pragma-loader")
            .options({
              pragmas: {
                debug: false,
              },
            });
        }
        // copy cesium assets to bundle and define CESIUM_BASE_URL accordingly
        config.plugin("cesium-copy").use(CopyWebpackPlugin, [
          {
            patterns: [
              ...["Workers", "Assets", "Widgets", "ThirdParty"].map(
                (asset) => ({
                  from: path.join(cesiumSource, cesiumBuild, asset),
                  to: `${cesiumOutput}/${asset}`,
                })
              ),
            ],
          },
        ]);

        config.plugin("define").tap((args) => [
          Object.assign({}, args[0], {
            CESIUM_BASE_URL: JSON.stringify(`${cesiumOutput}/`),
          }),
        ]);

        // prevent performance warnings from vue
        config.performance
          .maxEntrypointSize(BUNDLE_SIZE_LIMIT * 1024 ** 2)
          .maxAssetSize(BUNDLE_SIZE_LIMIT * 1024 ** 2);
        // optimize splitChunks for cesium alongside other dependencies
        config.optimization.splitChunks({
          cacheGroups: {
            cesium: {
              name: "npm.cesium",
              test: /[\\/]node_modules[\\/]cesium/,
              priority: 10,
              chunks: "all",
            },
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              chunks: "all",
              name(module) {
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )[1];
                return `npm.${packageName.replace("@", "")}`;
              },
            },
            common: {
              name: "app",
              minChunks: 2,
              priority: -20,
              chunks: "initial",
              reuseExistingChunk: true,
            },
          },
        });
      },
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-devServer
    devServer: {
      https: false,
      port: 8080,
      open: true, // opens browser window automatically
    },

    // https://v2.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-framework
    framework: {
      config: {},

      // iconSet: 'material-icons', // Quasar icon set
      // lang: 'en-US', // Quasar language pack

      // For special cases outside of where the auto-import stategy can have an impact
      // (like functional components as one of the examples),
      // you can manually specify Quasar components/directives to be available everywhere:
      //
      // components: [],
      // directives: [],

      // Quasar plugins
      plugins: [],
    },

    // animations: 'all', // --- includes all animations
    // https://v2.quasar.dev/options/animations
    animations: [],
  };
});
