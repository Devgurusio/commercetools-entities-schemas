module.exports = {
  type: "object",
  description: "API client draft object",
  properties: {
    name: { type: "string" },
    scope: {
      type: "string",
      description: "A whitespace separated list of the OAuth scopes"
    },
    deleteDaysAfterCreation: {
      type: "integer",
      description:
        "If set, the client will be deleted after the specified amount of days"
    }
  },
  required: ["name", "scope"]
};
