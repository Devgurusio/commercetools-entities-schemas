const productData = require("./productData");

module.exports = {
  type: "object",
  properties: {
    published: {
      type: "boolean",
      description: "Whether the product is published"
    },
    current: {
      ...productData,
      description: "The current data of the product"
    },
    staged: {
      ...productData,
      description: "The staged data of the product"
    },
    hasStagedChanges: {
      type: "boolean",
      description: "Whether the staged data is different from the current data"
    }
  }
};
