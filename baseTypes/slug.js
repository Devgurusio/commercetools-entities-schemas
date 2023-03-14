module.exports = {
  type: 'object',
  description:
    "A localized string. Entries with the format 'language[-country]: [-a-zA-Z0-9_]{2,256}'",
  patternProperties: {
    '^.+$': {
      type: 'string',
      pattern: '^[a-zA-Z0-9-_]+$',
      minLength: 2,
      maxLength: 256
    }
  }
};
