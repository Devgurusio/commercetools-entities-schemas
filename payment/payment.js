const customFields = require('../baseTypes/customFields');
const paymentDraft = require('./paymentDraft');
const resource = require('../common/resource');
const transaction = require('./transaction');

module.exports = {
  ...resource,
  ...paymentDraft,
  description: 'Representation of a payment',
  properties: {
    ...resource.properties,
    ...paymentDraft.properties,
    custom: customFields,
    transactions: {
      type: 'array',
      description:
        'A list of financial transactions of different TransactionTypes with different TransactionStates',
      items: transaction
    },
    interfaceInteractions: {
      type: 'array',
      description:
        'Interface interactions can be requests send to the PSP, responses received from the PSP or notifications received from the PSP. Some interactions may result in a transaction. If so, the interactionId in the Transaction should be set to match the ID of the PSP for the interaction. Interactions are managed by the PSP integration and are usually neither written nor read by the user facing frontends or other services',
      items: customFields
    }
  },
  required: [...resource.required, ...paymentDraft.required]
};
