const resource = require("../common/resource");
const taxCategoryDraft = require("./taxCategoryDraft");

module.exports = {
  ...resource,
  ...taxCategoryDraft,
  description: "Representation of a tax category",
  properties: {
    ...resource.properties,
    ...taxCategoryDraft.properties
  },
  required: [...resource.required, ...taxCategoryDraft.required]
};
