const resource = require("../common/resource");
const storeDraft = require("./storeDraft");

module.exports = {
  ...resource,
  ...storeDraft,
  description: "Representation of a store",
  properties: {
    ...resource.properties,
    ...storeDraft.properties
  },
  required: [...resource.required, ...storeDraft.required]
};
