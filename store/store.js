const resource = require('../common/resource');
const storeDraft = require('./storeDraft');
const reference = require('../baseTypes/reference');
const productSelection = require('./productSelectionSetting');
const customFields = require('../baseTypes/customFields');

module.exports = {
  ...resource,
  ...storeDraft,
  description: 'Representation of a store',
  properties: {
    ...resource.properties,
    ...storeDraft.properties,
    distributionChannels: {
      description:
        'Set of Reference to a Channel with ProductDistribution ChannelRole',
      type: 'array',
      items: reference
    },
    supplyChannels: {
      description:
        'Set of Reference to a Channel with InventorySupply ChannelRole',
      type: 'array',
      items: reference
    },
    productSelections: {
      description:
        'If empty, all Products in the Project are available in this Store. If not empty, those Product Selections are available in the Store for which the active setting is true',
      type: 'array',
      items: productSelection
    },
    custom: customFields
  },
  required: [...resource.required, ...storeDraft.required]
};
