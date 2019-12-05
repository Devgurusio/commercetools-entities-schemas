module.exports = {
  type: "object",
  description:
    "A localized string. Entries with the format 'language[-country]: [-a-zA-Z0-9_]{2,256}'",
  example: {
    en: "example",
    es: "ejemplo",
    "en-US": "example"
  },
  patternProperties: {
    "^.+$": { type: "string", pattern: "[-a-zA-Z0-9_]{2,256}" }
  }
};
