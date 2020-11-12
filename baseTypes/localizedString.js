module.exports = {
  type: 'object',
  description:
    "A localized string. Entries with the format 'language[-country]: string'",
  example: {
    en: 'example',
    es: 'ejemplo',
    'en-US': 'example'
  },
  patternProperties: {
    '^.+$': { type: 'string' }
  }
};
