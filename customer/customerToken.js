const dateTime = require("../baseTypes/dateTime");

module.exports = {
  type: "object",
  description: "",
  properties: {
    id: { type: "string" },
    customerId: { type: "string" },
    createdAt: dateTime,
    lastModifiedAt: dateTime,
    expiresAt: dateTime,
    value: { type: "string" }
  },
  required: [
    "id",
    "customerId",
    "createdAt",
    "lastModifiedAt",
    "expiresAt",
    "value"
  ]
};
