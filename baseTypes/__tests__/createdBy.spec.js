const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const schema = require('../createdBy');

describe('createdBy', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    beforeAll(() => {
      data = {
        user: {
          typeId: 'user',
          id: '49f30471-80d5-4ade-b14f-dceb76d93d93'
        }
      };
      ajv = new Ajv();
      addFormats(ajv);
    });

    beforeEach(() => {
      valid = ajv.validate(schema, data);
    });

    test('should be valid', () => {
      expect(valid).toBeTruthy();
    });
  });
});
