module.exports = {
  type: "object",
  properties: {
    name: { type: "string", enum: ["Money"] }
  },
  required: ["name"]
};
