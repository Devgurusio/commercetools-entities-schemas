module.exports = {
  type: 'object',
  description:
    "A localized string. Entries with the format 'language[-country]: string'",
  patternProperties: {
    '^.+$': { type: 'string' }
  }
};
