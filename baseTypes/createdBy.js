const reference = require("./reference");

module.exports = {
  type: "object",
  additionalProperties: false,
  properties: {
    clientId: {
      type: "string",
      description: "The ID of the API Client which created a resource"
    },
    externalUserId: {
      type: "string",
      description:
        "External user ID provided by X-External-User-ID HTTP Header. Maximum length is 128 characters"
    },
    customer: {
      ...reference,
      description:
        "Reference to a Customer. Present when creating a resource using a token from the password flow"
    },
    anonymousId: {
      type: "string",
      description:
        "Present when creating a resource using a token from an anonymous session"
    },
    user: {
      ...reference,
      description: "Reference to a User"
    }
  }
};
