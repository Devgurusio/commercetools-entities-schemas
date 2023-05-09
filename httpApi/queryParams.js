module.exports = {
  type: 'object',
  description: 'Parameters accepted in CommerceTools queries',
  properties: {
    expand: {
      type: 'array',
      description: 'Attributes to expand',
      items: {
        type: 'string',
        description: 'Attribute to expand'
      }
    },
    sort: {
      type: 'array',
      description: 'Sort attribute',
      items: {
        type: 'string',
        description: `Sort attribute.
          I.E: createdAt asc`
      }
    },
    limit: {
      type: 'integer',
      description: 'Limit',
      minimum: 1,
      maximum: 500
    },
    offset: {
      type: 'integer',
      description: `The offset supplied by the client or the server default.
        It is the number of elements skipped, not a page number`,
      minimum: 0
    },
    where: {
      type: 'array',
      description: 'Query Predicates',
      items: {
        type: 'string',
        description: 'Query Predicate'
      }
    },
    whereOperator: {
      type: 'string',
      description: 'Where operator to join where clauses',
      enum: ['and', 'or']
    }
  }
};
