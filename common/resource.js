const dateTime = require("../baseTypes/dateTime");
const createdBy = require("../baseTypes/createdBy");
const lastModifiedBy = require("../baseTypes/lastModifiedBy");

module.exports = {
  type: "object",
  properties: {
    id: { type: "string", description: "The unique ID of the customer group" },
    version: {
      type: "number",
      description: "The current version of the customer group"
    },
    createdAt: dateTime,
    createdBy,
    lastModifiedAt: dateTime,
    lastModifiedBy,
    lastMessageSequenceNumber: { type: "number" }
  },
  required: ["id", "version", "createdAt", "lastModifiedAt"]
};
