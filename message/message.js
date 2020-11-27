const resource = require('../common/resource');
const reference = require('../baseTypes/reference');
const userProvidedIdentifiers = require('../baseTypes/userProvidedIdentifiers');

module.exports = {
  ...resource,
  description:
    'A message represents a change or an action performed on a resource (like an Order or a Product)',
  properties: {
    ...resource.properties,
    sequenceNumber: {
      type: 'number',
      description:
        'A message number in relation to other messages in the context of a specific resource. The sequenceNumber of the next message of this resource is guaranteed to be a successor of the sequenceNumber of the current message. In other words, it will be sequenceNumber + 1. sequenceNumber can be used to make sure that all messages of this resource are processed in correct order.'
    },
    resource: {
      ...reference,
      description:
        'A reference to the resource on which the change was performed.'
    },
    resourceVersion: {
      type: 'number',
      description:
        'The version of the resource on which the change was performed.'
    },
    resourceUserProvidedIdentifiers: userProvidedIdentifiers,
    type: {
      type: 'string',
      description: 'The type of the message.'
    }
  },
  required: [
    ...resource.required,
    'sequenceNumber',
    'resource',
    'resourceVersion',
    'type'
  ]
};
