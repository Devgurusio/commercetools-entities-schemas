const dateTime = require('../baseTypes/dateTime');
const money = require('../baseTypes/money');
const transactionState = require('./transactionState');
const transactionType = require('./transactionType');

module.exports = {
  type: 'object',
  properties: {
    timestamp: {
      ...dateTime,
      description: 'The time at which the transaction took place'
    },
    type: {
      ...transactionType,
      description: 'The type of this transaction'
    },
    amount: money,
    interactionId: {
      type: 'string',
      description:
        'The identifier that is used by the interface that managed the transaction (usually the PSP). If a matching interaction was logged in the interfaceInteractions array, the corresponding interaction should be findable with this ID'
    },
    state: {
      ...transactionState,
      description:
        'The state of this transaction. If not set, defaults to Initial'
    }
  },
  required: ['type', 'amount']
};
