# Configuration steps

- npx @quasar/cli create <folder_name> --branch next
  - Sass with SCSS syntax
  - ESLint (Prettier)
  - npm
- cd <folder_name>
- npm install @quasar/cli --save-dev
- add `"serve": "quasar dev"` to package.json
- npm run serve

## Note
The Cesium configuration in chainWebpack in quasar.conf.js was partly taken from https://github.com/CesiumGS/cesium-webpack-example

