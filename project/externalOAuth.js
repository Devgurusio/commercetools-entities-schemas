module.exports = {
  type: "object",
  description:
    "Represents a RFC 7662 compliant OAuth2 Token Introspection endpoint",
  properties: {
    url: { type: "string" },
    authorizationHeader: {
      type: "string",
      description: "Partially hidden on retrieval"
    }
  },
  required: ["url", "authorizationHeader"]
};
