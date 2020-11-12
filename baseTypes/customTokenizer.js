module.exports = {
  type: 'object',
  description:
    'Custom tokenizer allows to define arbitrary tokens which are used to match the input',
  properties: {
    type: {
      type: 'string',
      enum: ['custom']
    },
    inputs: {
      type: 'array',
      description: 'Array of custom tokens',
      items: { type: 'string' }
    }
  },
  required: ['type']
};
