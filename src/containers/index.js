if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Root/Root.prod');
} else {
  module.exports = require('./Root/Root.dev');
}
