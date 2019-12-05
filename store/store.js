const dateTime = require("../baseTypes/dateTime");
const storeDraft = require("./storeDraft");

module.exports = {
  ...storeDraft,
  type: "object",
  description: "Store object",
  properties: {
    ...storeDraft.properties,
    id: { type: "string" },
    version: { type: "number" },
    createdAt: dateTime,
    lastModifiedAt: dateTime
  },
  required: [
    ...storeDraft.required,
    "id",
    "version",
    "createdAt",
    "lastModifiedAt"
  ]
};
