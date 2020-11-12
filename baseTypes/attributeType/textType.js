module.exports = {
  type: 'object',
  properties: {
    name: { type: 'string', enum: ['text'] }
  },
  required: ['name']
};
