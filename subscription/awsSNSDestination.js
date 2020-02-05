module.exports = {
  type: "object",
  description:
    "AWS SNS can be used to push messages to AWS Lambda, HTTP endpoints (webhooks) or fan-out messages to SQS queues",
  properties: {
    type: {
      type: "string",
      enum: ["SNS"]
    },
    topicArn: { type: "string" },
    accessKey: { type: "string" },
    accessSecret: {
      type: "string",
      description: "Partially hidden on retrieval"
    }
  },
  required: ["type", "topicArn", "accessKey", "accessSecret"]
};
