module.exports = {
  type: "object",
  description:
    "The Platform Format uses constructs that are similar to the ones used in the REST API, e.g. on the Messages Query HTTP API",
  properties: {
    type: {
      type: "string",
      enum: "Platform"
    }
  },
  required: ["type"]
};
