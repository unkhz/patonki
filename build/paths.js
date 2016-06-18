var path = require('path');
var rootPath = path.join(__dirname, '..');

module.exports = {
  root: rootPath,
  app: path.join(rootPath, 'src'),
  constants: path.join(rootPath, 'src', 'constants'),
  actions: path.join(rootPath, 'src', 'actions'),
  components: path.join(rootPath, 'src', 'components'),
  reducers: path.join(rootPath, 'src', 'reducers'),
  containers: path.join(rootPath, 'src', 'containers'),
  utils: path.join(rootPath, 'src', 'utils'),
  store: path.join(rootPath, 'src', 'store'),
};
