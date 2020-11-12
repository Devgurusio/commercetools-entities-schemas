const assetDimensions = require('./assetDimensions');
const key = require('./key');

module.exports = {
  type: 'object',
  description:
    'An AssetSource is a representation of an Asset in a specific format, e.g. a video in a certain encoding, or an image in a certain resolution',
  properties: {
    uri: {
      type: 'string',
      format: 'uri'
    },
    key: {
      ...key,
      description: 'Must be unique within the Asset'
    },
    dimensions: assetDimensions,
    contentType: { type: 'string' }
  },
  required: ['uri']
};
