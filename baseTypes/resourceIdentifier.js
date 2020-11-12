module.exports = {
  type: 'object',
  description: `A reference to a resource can be created by providing the ID of the resource.
    Some resources also use the key as a unique identifier and a reference can be created by providing the key instead of the ID. In this case, the server will find the resource with the given key and use the ID of the found resource to create a reference`,
  properties: {
    id: {
      type: 'string',
      description: 'The unique ID of the referenced resource'
    },
    key: {
      type: 'string',
      description: 'The unique key of the referenced resource'
    },
    typeId: {
      type: 'string',
      description: 'The typeId of the reference'
    }
  },
  oneOf: [
    {
      required: ['id']
    },
    {
      required: ['key']
    }
  ]
};
