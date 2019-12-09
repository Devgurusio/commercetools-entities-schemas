const taxRateDraft = require("./taxRateDraft");

module.exports = {
  ...taxRateDraft,
  type: "object",
  properties: {
    ...taxRateDraft.properties,
    id: {
      type: "string",
      description:
        "The ID is always set if the tax rate is part of a TaxCategory. \
        The external tax rates in a Cart do not contain an id."
    }
  }
};
