const producSelectionDraft = require('./productSelectionSettingDraft');
const reference = require('../baseTypes/reference');

module.exports = {
  ...producSelectionDraft,
  properties: {
    ...producSelectionDraft.properties,
    productSelection: reference
  }
};
