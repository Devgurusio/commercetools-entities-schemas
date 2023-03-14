const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const schema = require('../pagedQueryResult');

describe('pagedQueryResult', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when only required fields', () => {
      beforeAll(() => {
        data = {
          offset: 0,
          limit: 1,
          count: 1,
          results: [
            {
              typeId: 'cart-discount',
              id: 'd1229e6f-2b79-441e-b419-180311e52754'
            }
          ]
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

    describe('when all fields', () => {
      beforeAll(() => {
        data = {
          offset: 0,
          limit: 1,
          count: 1,
          total: 1,
          results: [
            {
              typeId: 'cart-discount',
              id: 'd1229e6f-2b79-441e-b419-180311e52754'
            }
          ],
          facets: {
            'red-things': {
              type: 'filter',
              count: 0
            },
            'variants.attributes.size': {
              type: 'filter',
              count: 0
            }
          },
          meta: {
            foo: 'var'
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

  describe('when error', () => {
    describe('when missing offset property', () => {
      beforeAll(() => {
        data = {
          limit: 1,
          count: 1,
          results: [
            {
              typeId: 'cart-discount',
              id: 'd1229e6f-2b79-441e-b419-180311e52754'
            }
          ]
        };
        ajv = new Ajv();
        addFormats(ajv);
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should not be valid', () => {
        expect(valid).toBeFalsy();
      });
    });

    describe('when missing count property', () => {
      beforeAll(() => {
        data = {
          offset: 0,
          limit: 1,
          results: [
            {
              typeId: 'cart-discount',
              id: 'd1229e6f-2b79-441e-b419-180311e52754'
            }
          ]
        };
        ajv = new Ajv();
        addFormats(ajv);
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should not be valid', () => {
        expect(valid).toBeFalsy();
      });
    });

    describe('when missing results property', () => {
      beforeAll(() => {
        data = {
          offset: 0,
          limit: 1,
          count: 1
        };
        ajv = new Ajv();
        addFormats(ajv);
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
