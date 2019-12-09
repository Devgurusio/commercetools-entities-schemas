module.exports = {
  type: "object",
  description:
    "Azure Event Grid can be used to push messages to Azure Functions, HTTP endpoints (webhooks), and several other Azure tools",
  properties: {
    type: {
      type: "string",
      enum: "EventGrid"
    },
    uri: {
      type: "string",
      description: "The URI of the Topic"
    },
    accessKey: {
      type: "string",
      description: "Partially hidden on retrieval"
    }
  },
  required: ["type", "uri", "accessKey"]
};
