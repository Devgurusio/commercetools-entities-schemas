const Ajv = require('ajv');
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
          total: 2,
          results: [
            {
              id: '74d32d79-aa32-44c8-8f2e-74132890310b'
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
          offset: 0,
          limit: 1,
          count: 1,
          total: 2,
          results: [
            {
              id: '74d32d79-aa32-44c8-8f2e-74132890310b'
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
            key: 'value'
          }
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
    describe('when missing offset', () => {
      beforeAll(() => {
        data = {
          limit: 1,
          count: 1,
          total: 2,
          results: [
            {
              id: '74d32d79-aa32-44c8-8f2e-74132890310b'
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
            key: 'value'
          }
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

    describe('when missing limit', () => {
      beforeAll(() => {
        data = {
          offset: 0,
          count: 1,
          total: 2,
          results: [
            {
              id: '74d32d79-aa32-44c8-8f2e-74132890310b'
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
            key: 'value'
          }
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

    describe('when missing count', () => {
      beforeAll(() => {
        data = {
          offset: 0,
          limit: 1,
          total: 2,
          results: [
            {
              id: '74d32d79-aa32-44c8-8f2e-74132890310b'
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
            key: 'value'
          }
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

    describe('when missing total', () => {
      beforeAll(() => {
        data = {
          offset: 0,
          limit: 1,
          count: 1,
          results: [
            {
              id: '74d32d79-aa32-44c8-8f2e-74132890310b'
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
            key: 'value'
          }
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

    describe('when missing results', () => {
      beforeAll(() => {
        data = {
          offset: 0,
          limit: 1,
          count: 1,
          total: 2,
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
            key: 'value'
          }
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
