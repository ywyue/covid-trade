# Story Map Template

Web application template for Multimedia Cartography

### Install the dependencies
```bash
npm install
```
Add new ones with `npm install <dependency-name> --save` or `--save-dev`

### Start the app in development mode
```bash
npm run serve
```
Your browser should be opened automatically at [http://localhost:8080/mmcarto21/groupN/](http://localhost:8080/mmcarto21/groupN/)

### Build the app for production
```bash
npm run build
```

To test the built production version locally, execute `npx http-server . -o /mmcarto21/groupN/`

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

### Best practices
- use an IDE (WebStorm, Visual Studio Code), enable Prettier on save to format the code
- use the developer tools of the browser to log content to the console or to set breakpoints
- use the [Vue developer tools](https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg) (beta version) to inspect the state of components
- only test a part of your application while development and uncomment the other parts
- if something annoys you while coding and you cannot fix it, let us know
- commit your changes frequently to your code repository
- upload the production version frequently on the mmcarto.ethz.ch server (you may refresh your browser cache)

### More details

- [Configuration](Configuration.md)
- [Parallax effect](Parallax.md)
