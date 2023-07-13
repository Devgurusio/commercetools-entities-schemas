module.exports = {
  type: 'object',
  description:
    "A localized string. Entries with the format 'language[-country]: string'",
  patternProperties: {
    '^[a-z]{2}(-[A-Z]{2})?$': { type: 'string' }
  },
  additionalProperties: false
};
