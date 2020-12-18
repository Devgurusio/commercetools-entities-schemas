module.exports = {
  description: 'Representation of a Discount Code State',
  type: 'string',
  enum: [
    'NotActive',
    'NotValid',
    'DoesNotMatchCart',
    'MatchesCart',
    'MaxApplicationReached',
    'ApplicationStoppedByPreviousDiscount'
  ]
};
