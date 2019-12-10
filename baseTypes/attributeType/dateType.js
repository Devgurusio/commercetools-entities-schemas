module.exports = {
  type: "object",
  properties: {
    name: { type: "string", enum: ["date"] }
  },
  required: ["name"]
};
