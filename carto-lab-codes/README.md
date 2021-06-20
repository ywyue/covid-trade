# Cartography Lab - Story Map

Web application for Cartography Lab

### Install the dependencies

```bash
npm install
```

Add new ones with `npm install <dependency-name> --save` or `--save-dev`

### Start the app in development mode

```bash
npm run serve
```

### Build the app for production

```bash
npm run build
```

### Important files and folders

- package.json - List of dependencies and project metadata
- .eslintrc.js - Configuration file for ESLint, handle syntax checks
- quasar.conf.js - Configuration file for Quasar, Vue.js and Webpack (see [reference)](https://v2.quasar.dev/quasar-cli/quasar-conf-js), specify options for the development server and production build (please set your group number in `basePath`)
- src/css/quasar.variables.scss - Overwrites the SCSS variables stored in node_modules/quasar/dist/quasar.sass
- src/css/app.scss - Global CSS/SCSS file for the app, otherwise use `<style scoped lang="scss">...</style>` in Vue components (more details to the [SASS language](https://sass-lang.com/))
- src/index.template.html - HTML entry point
- src/pages/layouts/MainLayout.vue + src/pages/Index.vue - Vue entry points
- src/components - Folder for Vue components
- public - Folder for external resources like geodata or images (please use [root-relative URLs](https://quasar.dev/quasar-cli/handling-assets#static-assets-public) to access them)
- src/assets - Folder for internal resources like fonts or icons
- dist - Folder where the production version will be created

