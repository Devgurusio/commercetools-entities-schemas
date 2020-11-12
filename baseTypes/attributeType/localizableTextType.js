module.exports = {
  type: 'object',
  properties: {
    name: { type: 'string', enum: ['ltext'] }
  },
  required: ['name']
};
