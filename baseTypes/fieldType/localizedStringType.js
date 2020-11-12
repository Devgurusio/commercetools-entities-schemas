module.exports = {
  type: 'object',
  properties: {
    name: { type: 'string', enum: ['LocalizedString'] }
  },
  required: ['name']
};
