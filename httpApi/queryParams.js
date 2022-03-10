module.exports = {
  type: 'object',
  description: 'Parameters accepted in CommerceTools queries',
  properties: {
    where: {
      oneOf: [
        {
          type: 'array',
          description: 'Query Predicates',
          items: {
            type: 'string',
            description: 'Query Predicate'
          }
        },
        {
          type: 'string',
          description: 'Query Predicate'
        }
      ]
    },
    whereOperator: {
      type: 'string',
      description: 'Where operator to join where clauses',
      enum: ['and', 'or']
    },
    expand: {
      oneOf: [
        {
          type: 'array',
          description: 'Attributes to expand',
          items: {
            type: 'string',
            description: 'Attribute to expand'
          }
        },
        {
          type: 'string',
          description: 'Attribute to expand'
        }
      ]
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
      oneOf: [
        {
          type: 'array',
          description: 'Sort attributes',
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
                enum: ['asc', 'desc'],
                default: 'asc'
              }
            },
            required: ['by']
          }
        },
        {
          type: 'object',
          properties: {
            by: {
              type: 'string',
              description: 'Field to sort by'
            },
            direction: {
              type: 'string',
              description: 'Sort direction',
              enum: ['asc', 'desc'],
              default: 'asc'
            }
          },
          required: ['by']
        }
      ]
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
