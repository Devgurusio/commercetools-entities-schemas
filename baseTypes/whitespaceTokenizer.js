module.exports = {
  type: 'object',
  description:
    'Whitespace tokenizer creates tokens by splitting the SearchKeyword text field by whitespaces',
  properties: {
    type: {
      type: 'string',
      enum: ['whitespace']
    }
  },
  required: ['type']
};
