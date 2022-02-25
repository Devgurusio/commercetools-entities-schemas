const addressDraft = require('./addressDraft');
const customFields = require('./customFields');

module.exports = {
  ...addressDraft,
  description: 'Representation of a postal address',
  properties: {
    ...addressDraft.properties,
    id: { type: 'string' },
    custom: customFields
  },
  required: [...addressDraft.required]
};
