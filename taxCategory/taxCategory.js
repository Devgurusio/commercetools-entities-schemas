const resource = require("../common/resource");
const taxCategoryDraft = require("./taxCategoryDraft");

module.exports = {
  ...resource,
  ...taxCategoryDraft,
  type: "object",
  properties: {
    ...resource.properties,
    ...taxCategoryDraft.properties
  },
  required: [...resource.required, ...taxCategoryDraft.required]
};
