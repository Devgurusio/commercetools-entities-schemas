const customFieldsDraft = require("../baseTypes/customFieldsDraft");

module.exports = {
  type: "object",
  description: "Customer Group Draft",
  properties: {
    key: {
      type: "string",
      description: "User - specific unique identifier for the customer group."
    },
    groupName: { type: "string" },
    custom: customFieldsDraft
  },
  required: ["groupName"]
};
