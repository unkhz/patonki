# Patonki boilerplate

Diverged from an early version of [rr-boilerplate](https://github.com/a-tarasyuk/rr-boilerplate).

### Key ingredients
  * [React](https://facebook.github.io/react)
  * [Redux](https://github.com/rackt/redux)
  * [Webpack](https://webpack.github.io)
  * [Babel](https://babeljs.io)
  * [ESlint](http://eslint.org/)
  * [Flow](http://flowtype.org/)
  * [Karma](https://karma-runner.github.io/)
  * [Mocha](https://mochajs.org/)
  * [Enzyme](http://airbnb.io/enzyme/)

### Build tasks
- `npm run dev-server` starts local development web server in port 9999
- `npm start` starts production build and run local web server in port 9999
- `npm run build` starts production build
- `npm test` runs unit tests, eslint check and flow check once
- `npm run karma-watch` runs unit tests and watches for changes
- `npm run karma` runs unit tests once
- `npm run eslint` runs eslint check once
- `npm run flow` runs flow check once

### Folder structure
The folder structure is organized based on modules, rather than design patterns. This generally leads to more cohesion in the application code.

    .
    ├── build         webpack, karma, paths configuration
    ├── dist          generated files
    ├── src           source files
    │   ├── _main     main module
    │   ├── _types    common flow types module
    │   ├── app       app container module
    │   └── example   example feature module
    └── test          test bundle
