module.exports = {
  type: "object",
  properties: {
    resourceTypeId: { type: "string" },
    actions: {
      type: "array",
      items: {
        type: "string"
      }
    }
  },
  required: ["resourceTypeId", "actions"]
};
