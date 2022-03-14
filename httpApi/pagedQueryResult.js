module.exports = {
  type: 'object',
  description:
    'For query responses of requests supporting paging via limit and offset, the following common top-level fields are returned',
  properties: {
    offset: {
      type: 'integer',
      description: `The offset supplied by the client or the server default.
        It is the number of elements skipped, not a page number`
    },
    limit: { type: 'integer' },
    count: { type: 'integer' },
    total: {
      type: 'integer',
      description: `The total number of results matching the query.
        This field is returned by default.
        For improved performance, calculating this field can be deactivated by using the query parameter withTotal=false`
    },
    results: {
      type: 'array',
      description: 'Array of results',
      items: {
        type: 'object',
        description: 'A particular result',
        additionalProperties: true
      }
    },
    facets: {
      type: 'object',
      description: 'Object containing FacetResults',
      additionalProperties: true
    },
    meta: {
      type: 'object',
      description:
        'Object containing supplementary information about the results',
      additionalProperties: true
    }
  },
  required: ['offset', 'count', 'results'],
  additionalProperties: true
};
