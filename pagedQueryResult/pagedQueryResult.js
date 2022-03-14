module.exports = {
  type: 'object',
  description: 'For query responses of requests supporting paging',
  properties: {
    offset: {
      type: 'number',
      description:
        'The offset supplied by the client or the server default. It is the number of elements skipped, not a page number.'
    },
    limit: {
      type: 'number'
    },
    count: {
      type: 'number',
      description: 'The actual number of results returned in results.'
    },
    total: {
      type: 'number',
      description: 'The total number of results matching the query.'
    },
    results: {
      type: 'array',
      items: {},
      description: 'Array of results'
    },
    facets: {
      type: 'object',
      description: 'Object containing FacetResults'
    },
    meta: {
      type: 'object',
      description:
        'Object containing supplementary information about the results'
    }
  },
  required: ['offset', 'count', 'results']
};
