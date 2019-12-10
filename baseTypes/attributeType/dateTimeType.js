module.exports = {
  type: "object",
  properties: {
    name: { type: "string", enum: ["datetime"] }
  },
  required: ["name"]
};
