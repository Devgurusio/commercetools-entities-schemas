const Ajv = require('ajv');
const schema = require('../extensionDraft');

describe('extensionDraft', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when only required fields', () => {
      beforeAll(() => {
        data = {
          destination: {
            type: 'HTTP',
            url: 'http://localhost'
          },
          triggers: [
            {
              resourceTypeId: 'cart',
              actions: ['Create', 'Update']
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

    describe('when all fields', () => {
      beforeAll(() => {
        data = {
          key: 'key',
          destination: {
            type: 'HTTP',
            url: 'http://localhost'
          },
          triggers: [
            {
              resourceTypeId: 'cart',
              actions: ['Create', 'Update']
            }
          ],
          timeoutInMs: 2000
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

  describe('when error', () => {
    describe('when missing destination property', () => {
      beforeAll(() => {
        data = {
          key: 'key',
          triggers: [
            {
              resourceTypeId: 'cart',
              actions: ['Create', 'Update']
            }
          ],
          timeoutInMs: 2000
        };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should not be valid', () => {
        expect(valid).toBeFalsy();
      });
    });

    describe('when missing triggers property', () => {
      beforeAll(() => {
        data = {
          key: 'key',
          destination: {
            type: 'HTTP',
            url: 'http://localhost'
          },
          timeoutInMs: 2000
        };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should not be valid', () => {
        expect(valid).toBeFalsy();
      });
    });
  });
});
