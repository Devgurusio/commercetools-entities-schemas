module.exports = {
  type: "object",
  properties: {
    name: { type: "string", enum: ["Date"] }
  },
  required: ["name"]
};
