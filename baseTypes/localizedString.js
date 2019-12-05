module.exports = {
  type: "object",
  description:
    "A localized string. Entries with the format 'language[-country]: string'",
  additionalProperties: true,
  example: {
    en: "example",
    es: "ejemplo",
    "es-CL": "ejemplo"
  }
};
