module.exports = {
  type: "object",
  properties: {
    name: { type: "string", enum: ["number"] }
  },
  required: ["name"]
};
