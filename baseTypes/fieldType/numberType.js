module.exports = {
  type: 'object',
  properties: {
    name: { type: 'string', enum: ['Number'] }
  },
  required: ['name']
};
