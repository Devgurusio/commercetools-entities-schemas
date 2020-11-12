const Ajv = require('ajv');
const schema = require('../searchKeywords');

describe('searchKeywords', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    beforeAll(() => {
      data = {
        en: [
          {
            text: 'text',
            suggestTokenizer: {
              type: 'whitespace'
            }
          },
          {
            text: 'text2',
            suggestTokenizer: {
              type: 'custom'
            }
          },
          {
            text: 'text3'
          }
        ]
      };
      ajv = Ajv();
    });

    beforeEach(() => {
      valid = ajv.validate(schema, data);
    });

    test('should be valid', () => {
      expect(valid).toBeTruthy();
    });
  });
});
