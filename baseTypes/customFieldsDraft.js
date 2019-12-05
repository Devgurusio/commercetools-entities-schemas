const resourceIdentifier = require("./resourceIdentifier");
const customFields = require("./customFields");

module.exports = {
  ...customFields,
  properties: {
    ...customFields.properties,
    type: resourceIdentifier
  }
};
