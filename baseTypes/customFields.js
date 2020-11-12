const customFieldsDraft = require('./customFieldsDraft');
const reference = require('../baseTypes/reference');

module.exports = {
  ...customFieldsDraft,
  description: 'Custom field definition',
  properties: {
    type: reference
  }
};
