# Patonki boilerplate

### Key ingredients
  * [React](https://facebook.github.io/react)
  * [Redux](https://github.com/rackt/redux)
  * [Webpack](https://webpack.github.io)
  * [Babel](https://babeljs.io)
  * [Flow](http://flowtype.org/)
  * [Karma](https://karma-runner.github.io/)
  * [Mocha](https://mochajs.org/)

### Build tasks
- `npm run dev-server` starts local development web server in port 9999
- `npm start` starts production build and run local web server in port 9999
- `npm run build` starts production build
- `npm test` runs tests once
- `npm run test-watch` runs tests and watches for changes


### Type checking with flow

Flow is not included as a dependency for portability reasons. You want to install it
globally..

    npm install -g flowtype

..and run it manually when needed

    flow
