module.exports = {
  type: 'object',
  description: 'Parameters accepted in CommerceTools queries',
  properties: {
    where: {
      type: ['array', 'string'],
      description: 'Query Predicate',
      items: { type: 'string' }
    },
    whereOperator: {
      type: 'string',
      description: 'Where operator to join where clauses',
      enum: ['and', 'or']
    },
    expand: {
      type: ['array', 'string'],
      description: 'Attributes to expand',
      items: {
        type: 'string',
        description: 'Attribute to expand'
      }
    },
    page: {
      type: 'integer',
      description: 'Page number to retrieve',
      minimum: 1,
      default: 1
    },
    perPage: {
      type: 'integer',
      description: 'Number of items to retrieve on one page',
      minimum: 1,
      maximum: 500,
      default: 20
    },
    sort: {
      type: ['array', 'object'],
      properties: {
        by: {
          type: 'string',
          description: 'Field to sort by'
        },
        direction: {
          type: 'string',
          description: 'Sort direction',
          enum: ['asc', 'desc']
        }
      },
      items: {
        type: 'object',
        properties: {
          by: {
            type: 'string',
            description: 'Field to sort by'
          },
          direction: {
            type: 'string',
            description: 'Sort direction',
            enum: ['asc', 'desc']
          }
        }
      }
    },
    sortBy: {
      type: 'string',
      description: 'Field name to apply the sort'
    },
    sortDirection: {
      type: 'string',
      description: 'Direction of order to apply',
      enum: ['asc', 'desc'],
      default: 'asc'
    }
  }
};
