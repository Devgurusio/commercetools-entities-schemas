module.exports = {
  type: 'object',
  description:
    'AWS SQS is a pull-queue on AWS. We support the Standard queue type (the FIFO queue type is not supported)',
  properties: {
    type: {
      type: 'string',
      enum: ['SQS']
    },
    queueUrl: { type: 'string' },
    accessKey: { type: 'string' },
    accessSecret: {
      type: 'string',
      description: 'Partially hidden on retrieval'
    },
    region: { type: 'string' }
  },
  required: ['type', 'queueUrl', 'accessKey', 'accessSecret', 'region']
};
