const customFields = require("./customFields");
const resourceIdentifier = require("./resourceIdentifier");

module.exports = {
  ...customFields,
  properties: {
    ...customFields.properties,
    type: resourceIdentifier
  }
};
