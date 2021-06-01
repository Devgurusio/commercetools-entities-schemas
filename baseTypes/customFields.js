const customFieldsDraft = require('./customFieldsDraft');
const reference = require('../baseTypes/reference');

module.exports = {
  ...customFieldsDraft,
  description: 'Custom field definition',
  properties: {
    ...customFieldsDraft.properties,
    type: reference
  }
}
