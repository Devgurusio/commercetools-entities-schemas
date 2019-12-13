module.exports = {
  type: "object",
  properties: {
    name: { type: "string", enum: ["String"] }
  },
  required: ["name"]
};
