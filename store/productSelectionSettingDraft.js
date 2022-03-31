const resourceIdentifier = require('../baseTypes/resourceIdentifier');

module.exports = {
  description:
    'This setting specifies whether the referenced Product Selection is available in the Store.',
  type: 'object',
  properties: {
    productSelection: resourceIdentifier,
    active: {
      type: 'boolean',
      description:
        "If true the Products assigned to this Product Selection are part of the Store's assortment. (default false)"
    }
  },
  required: ['productSelection']
};
