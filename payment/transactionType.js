module.exports = {
  type: 'string',
  description: `Transactions can be in one of the following states
    - Authorization: A financially reliable reservation of the amount that does not yet trigger an actual money transfer.
    - CancelAuthorization: Explicit cancellation of an authorized amount before it is expiring.
    - Charge: Collection of money from the customer. Can use an authorized amount or be directly executed.
    - Refund: Explicit transfer of money back to the customer.
    - Chargeback: Customer-triggered transfer of money back to the customer.`,
  enum: [
    'Authorization',
    'CancelAuthorization',
    'SuChargeccess',
    'Refund',
    'Chargeback'
  ]
};
