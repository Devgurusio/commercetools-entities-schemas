module.exports = {
  type: 'string',
  description: `Transactions can be in one of the following states
    - Initial: The initial state. The PSP has not accepted the transaction yet (this includes if the PSP has not been contacted yet).
    - Pending: The PSP has accepted the transaction, but it is not completed yet.
    - Success: Transactions should only be set to state Success after a confirmation from the PSP was received that confirms that a transaction was completed successfully. E.g. in the case of a refund, the transaction is not added when the refund request is being sent to the PSP or the PSP acknowledges the request (the interfaceInteractions may be used for these), but when the PSP sends a notification that the refund has been executed.
    - Failure: The transaction has unrecoverably failed.`,
  enum: ['Initial', 'Pending', 'Success', 'Failure']
};
