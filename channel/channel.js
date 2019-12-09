const channelDraft = require("./channelDraft");
const customFields = require("../baseTypes/customFields");
const resource = require("../common/resource");
const reviewRatingStatistics = require("../baseTypes/reviewRatingStatistics");

module.exports = {
  ...resource,
  ...channelDraft,
  description: "Representation of a channel",
  properties: {
    ...resource.properties,
    ...channelDraft.properties,
    roles: {
      ...channelDraft.properties.roles,
      description:
        "The roles of this channel. Each channel must have at least one role"
    },
    custom: customFields,
    reviewRatingStatistics: {
      ...reviewRatingStatistics,
      description:
        "Statistics about the review ratings taken into account for this channel"
    }
  },
  required: [...resource.required, ...channelDraft.required]
};
