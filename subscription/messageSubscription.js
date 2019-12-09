module.exports = {
  type: "object",
  properties: {
    resourceTypeId: { type: "string" },
    types: { type: "array", items: { type: "string" } }
  },
  required: ["resourceTypeId"]
};
