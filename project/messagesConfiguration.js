module.exports = {
  type: "object",
  description:
    "This object is used to configure the Messages Query HTTP API feature for the project",
  properties: {
    enabled: {
      type: "boolean",
      description:
        "When true the creation of messages on the Messages Query HTTP API is enabled"
    },
    deleteDaysAfterCreation: {
      type: "number",
      description:
        "Defaults to 15 Specifies after how many days messages will be deleted from the Messages Query HTTP API. Must not be larger than 90 days. Optional for backwards compatibility reasons only"
    }
  },
  required: ["enabled"]
};
