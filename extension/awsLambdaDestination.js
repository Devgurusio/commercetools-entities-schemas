module.exports = {
  type: "object",
  description: "AWS Lambda Destination",
  properties: {
    type: {
      type: "string",
      enum: ["HTTP"]
    },
    arn: {
      type: "string",
      description:
        "The ARN of the Lambda function, in the format arn:aws:lambda:<region>:<accountid>:function:<functionName>"
    },
    accessKey: { type: "string" },
    accessSecret: {
      type: "string",
      description: "Partially hidden on retrieval"
    }
  },
  required: ["type", "arn", "accessKey", "accessSecret"]
};
