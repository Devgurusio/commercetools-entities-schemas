const address = require('../baseTypes/address');
const customFieldsDraft = require('../baseTypes/customFieldsDraft');
const geoJSONGeometry = require('../baseTypes/geoJSONGeometry');
const key = require('../baseTypes/key');
const localizedString = require('../baseTypes/localizedString');

module.exports = {
  type: 'object',
  description: 'Channel draft object',
  properties: {
    key: {
      ...key,
      description:
        'Any arbitrary string key that uniquely identifies this channel within the project'
    },
    roles: {
      type: 'array',
      description:
        'If not specified, then channel will get InventorySupply role by default',
      items: {
        type: 'string',
        enum: [
          'InventorySupply',
          'ProductDistribution',
          'OrderExport',
          'OrderImport',
          'Primary'
        ]
      }
    },
    name: {
      ...localizedString,
      description: 'A human-readable name of the channel'
    },
    description: {
      ...localizedString,
      description: 'A human-readable description of the channel'
    },
    address: {
      ...address,
      description:
        'The address where this channel is located (e.g. if the channel is a physical store)'
    },
    custom: customFieldsDraft,
    geoLocation: geoJSONGeometry
  },
  required: ['key']
};
