const httpDestinationAuthentication = require("./httpDestinationAuthentication");

module.exports = {
  type: "object",
  description: "HTTP Destination",
  properties: {
    type: {
      type: "string",
      enum: ["HTTP"]
    },
    url: {
      type: "string",
      format: "uri"
    },
    authentication: httpDestinationAuthentication
  },
  required: ["type", "url"]
};
