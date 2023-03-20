module.exports = {
  type: 'object',
  description: 'Representation for a Tracking Data',
  properties: {
    trackingId: {
      description: 'The ID to track one parcel',
      type: 'string'
    },
    carrier: {
      description: 'The carrier that delivers the parcel',
      type: 'string'
    },
    provider: {
      description:
        'The name of the provider which serves as facade to several carriers',
      type: 'string'
    },
    providerTransaction: {
      description: 'The id of the transaction with the provider',
      type: 'string'
    },
    isReturn: {
      description:
        'Flag to distinguish if the parcel is on the way to the customer (false) or on the way back (true)',
      type: 'boolean'
    }
  }
};
