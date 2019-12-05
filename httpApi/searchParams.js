module.exports = {
  type: "object",
  additionalProperties: false,
  description: "Parameters accepted in CommerceTools queries",
  properties: {
    page: {
      type: "integer",
      description: "Page number to retrieve",
      minimum: 1,
      default: 1
    },
    perPage: {
      type: "integer",
      description: "Number of items to retrieve on one page",
      minimum: 1,
      maximum: 500,
      default: 20
    },
    sortBy: { type: "string", description: "Field name to apply the sort" },
    sortDirection: {
      type: "string",
      description: "Direction of order to apply",
      enum: ["asc", "desc"],
      default: "asc"
    }
  }
};
