module.exports = {
  type: "object",
  properties: {
    name: { type: "string", enum: ["time"] }
  },
  required: ["name"]
};
