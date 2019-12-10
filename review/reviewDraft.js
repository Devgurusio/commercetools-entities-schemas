const customFieldsDraft = require("../baseTypes/customFieldsDraft");
const key = require("../baseTypes/key");
const resourceIdentifier = require("../baseTypes/resourceIdentifier");

module.exports = {
  type: "object",
  description: "Review draft object",
  properties: {
    key,
    uniquenessValue: {
      type: "string",
      description:
        "If set, this value must be unique among reviews. For example, if you want to have only one review per customer and per product, you can set the value to customer's id + product's id"
    },
    locale: {
      type: "string",
      description: "IETF language tag"
    },
    authorName: { type: "string" },
    title: { type: "string" },
    text: { type: "string" },
    target: {
      ...resourceIdentifier,
      description:
        "Identifies the target of the review. Can be a Product or a Channel"
    },
    state: {
      ...resourceIdentifier,
      description: "ResourceIdentifier to a State"
    },
    rating: {
      type: "number",
      description: `Number between -100 and 100 included.
        Rating of the targeted object, like a product.
        This rating can represent the number of stars, or a percentage, or a like (+1)/dislike (-1)
        A rating is used in the ratings statistics of the targeted object, unless the review is in a state that does not have the role ReviewIncludedInStatistics.`
    },
    customer: {
      ...resourceIdentifier,
      description: "The customer who created the review"
    },
    custom: customFieldsDraft
  }
};
