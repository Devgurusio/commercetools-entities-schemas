module.exports = {
  type: "object",
  description:
    "Google Cloud Pub/Sub can be used both as a pull-queue, and to push messages to e.g. Google Cloud Functions or HTTP endpoints (webhooks)",
  properties: {
    type: {
      type: "string",
      enum: "GoogleCloudPubSub"
    },
    projectId: {
      type: "string",
      description: "The ID of the project that contains the Pub/Sub topic"
    },
    topic: {
      type: "string",
      description: "Name of the topic"
    }
  },
  required: ["type", "projectId", "topic"]
};
