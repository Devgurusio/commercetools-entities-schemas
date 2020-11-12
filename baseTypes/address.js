const addressDraft = require('./addressDraft');

module.exports = {
  ...addressDraft,
  description: 'Representation of a postal address',
  properties: {
    ...addressDraft.properties,
    id: { type: 'string' }
  },
  required: [...addressDraft.required]
};
