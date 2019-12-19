const createdBy = require("../baseTypes/createdBy");
const dateTime = require("../baseTypes/dateTime");
const externalOAuth = require("./externalOAuth");
const key = require("../baseTypes/key");
const lastModifiedBy = require("../baseTypes/lastModifiedBy");
const messagesConfiguration = require("./messagesConfiguration");
const shippingRateInputType = require("./shippingRateInputType");

module.exports = {
  type: "object",
  description: "Representation of the project",
  properties: {
    version: {
      type: "number",
      description: "The current version of the project"
    },
    key: {
      ...key,
      description: "The unique key of the project"
    },
    createdAt: dateTime,
    createdBy,
    lastModifiedAt: dateTime,
    lastModifiedBy,
    name: {
      type: "string",
      description: "The name of the project"
    },
    countries: {
      type: "array",
      items: {
        type: "string",
        description: "A two-digit country code as per ISO 3166-1 alpha-2"
      }
    },
    currencies: {
      type: "array",
      items: {
        type: "string",
        description: "A three-digit currency code as per ISO 4217"
      }
    },
    languages: {
      type: "array",
      items: {
        type: "string",
        description: "IETF language tag"
      }
    },
    trialUntil: {
      type: "string",
      description: "The time is in the format Year-Month YYYY-MM"
    },
    messages: messagesConfiguration,
    shippingRateInputType,
    externalOAuth
  },
  required: ["version", "key", "createdAt", "name"]
};
