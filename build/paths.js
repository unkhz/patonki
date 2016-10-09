var path = require('path');
var rootPath = path.join(__dirname, '..');

module.exports = {
  root: rootPath,
  main: path.join(rootPath, 'src', '_main'),
  src: path.join(rootPath, 'src'),
  dist: path.join(rootPath, 'dist'),
};
