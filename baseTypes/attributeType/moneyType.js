module.exports = {
  type: "object",
  properties: {
    name: { type: "string", enum: ["money"] }
  },
  required: ["name"]
};
