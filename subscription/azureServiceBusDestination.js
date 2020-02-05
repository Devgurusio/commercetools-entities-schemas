module.exports = {
  type: "object",
  description:
    "Azure Service Bus can be used as a pull-queue with Queues or to fan-out messages with Topics and Subscriptions",
  properties: {
    type: {
      type: "string",
      enum: ["AzureServiceBus"]
    },
    connectionString: {
      type: "string",
      description: "The SharedAccessKey is partially hidden on retrieval"
    }
  },
  required: ["type", "connectionString"]
};
