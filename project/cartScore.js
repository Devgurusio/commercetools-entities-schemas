module.exports = {
  type: 'object',
  description: `Cart Score is used when the shipping rate maps to an abstract cart categorization expressed through an integer, e.g. shipping score or weight ranges.
    The range starts at 0. The default price covers the 0, tiers start at 1`,
  properties: {
    type: { type: 'string', enum: ['CartScore'] }
  },
  required: ['type']
};
