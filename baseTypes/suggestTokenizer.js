const customTokenizer = require('./customTokenizer');
const whitespaceTokenizer = require('./whitespaceTokenizer');

module.exports = {
  oneOf: [customTokenizer, whitespaceTokenizer]
};
