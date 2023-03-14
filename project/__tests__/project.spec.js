const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const schema = require('../project');

describe('project', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when only required fields', () => {
      beforeAll(() => {
        data = {
          version: 21,
          key: 'stylex-test',
          createdAt: '2017-09-19T17:41:52.494Z',
          name: 'customizer-test'
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
          version: 21,
          key: 'stylex-test',
          createdAt: '2017-09-19T17:41:52.494Z',
          createdBy: {
            user: {
              typeId: 'user',
              id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b'
            }
          },
          lastModifiedAt: '2017-09-19T17:41:52.494Z',
          lastModifiedBy: {
            user: {
              typeId: 'user',
              id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b'
            }
          },
          name: 'customizer-test',
          countries: ['ES', 'US'],
          currencies: ['EUR', 'USD', 'CAD', 'ARS'],
          languages: ['en'],
          trialUntil: '2090-01',
          messages: {
            enabled: true,
            deleteDaysAfterCreation: 15
          },
          shippingRateInputType: {
            type: 'CartClassification',
            values: [
              {
                key: 'key',
                label: {
                  en: 'Key label',
                  es: 'Etiquieta'
                }
              }
            ]
          },
          externalOAuth: {
            url: 'http://localhost:3000',
            authorizationHeader: 'authorizationHeader'
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
    describe('when missing version property', () => {
      beforeAll(() => {
        data = {
          key: 'stylex-test',
          createdAt: '2017-09-19T17:41:52.494Z',
          createdBy: {
            user: {
              typeId: 'user',
              id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b'
            }
          },
          lastModifiedAt: '2017-09-19T17:41:52.494Z',
          lastModifiedBy: {
            user: {
              typeId: 'user',
              id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b'
            }
          },
          name: 'customizer-test',
          countries: ['ES', 'US'],
          currencies: ['EUR', 'USD', 'CAD', 'ARS'],
          languages: ['en'],
          trialUntil: '2090-01',
          messages: {
            enabled: true,
            deleteDaysAfterCreation: 15
          },
          shippingRateInputType: {
            type: 'CartClassification',
            values: [
              {
                key: 'key',
                label: {
                  en: 'Key label',
                  es: 'Etiquieta'
                }
              }
            ]
          },
          externalOAuth: {
            url: 'http://localhost:3000',
            authorizationHeader: 'authorizationHeader'
          }
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

    describe('when missing key property', () => {
      beforeAll(() => {
        data = {
          version: 21,
          createdAt: '2017-09-19T17:41:52.494Z',
          createdBy: {
            user: {
              typeId: 'user',
              id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b'
            }
          },
          lastModifiedAt: '2017-09-19T17:41:52.494Z',
          lastModifiedBy: {
            user: {
              typeId: 'user',
              id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b'
            }
          },
          name: 'customizer-test',
          countries: ['ES', 'US'],
          currencies: ['EUR', 'USD', 'CAD', 'ARS'],
          languages: ['en'],
          trialUntil: '2090-01',
          messages: {
            enabled: true,
            deleteDaysAfterCreation: 15
          },
          shippingRateInputType: {
            type: 'CartClassification',
            values: [
              {
                key: 'key',
                label: {
                  en: 'Key label',
                  es: 'Etiquieta'
                }
              }
            ]
          },
          externalOAuth: {
            url: 'http://localhost:3000',
            authorizationHeader: 'authorizationHeader'
          }
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

    describe('when missing createdAt property', () => {
      beforeAll(() => {
        data = {
          version: 21,
          key: 'stylex-test',
          createdBy: {
            user: {
              typeId: 'user',
              id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b'
            }
          },
          lastModifiedAt: '2017-09-19T17:41:52.494Z',
          lastModifiedBy: {
            user: {
              typeId: 'user',
              id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b'
            }
          },
          name: 'customizer-test',
          countries: ['ES', 'US'],
          currencies: ['EUR', 'USD', 'CAD', 'ARS'],
          languages: ['en'],
          trialUntil: '2090-01',
          messages: {
            enabled: true,
            deleteDaysAfterCreation: 15
          },
          shippingRateInputType: {
            type: 'CartClassification',
            values: [
              {
                key: 'key',
                label: {
                  en: 'Key label',
                  es: 'Etiquieta'
                }
              }
            ]
          },
          externalOAuth: {
            url: 'http://localhost:3000',
            authorizationHeader: 'authorizationHeader'
          }
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

    describe('when missing name property', () => {
      beforeAll(() => {
        data = {
          version: 21,
          key: 'stylex-test',
          createdAt: '2017-09-19T17:41:52.494Z',
          createdBy: {
            user: {
              typeId: 'user',
              id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b'
            }
          },
          lastModifiedAt: '2017-09-19T17:41:52.494Z',
          lastModifiedBy: {
            user: {
              typeId: 'user',
              id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b'
            }
          },
          countries: ['ES', 'US'],
          currencies: ['EUR', 'USD', 'CAD', 'ARS'],
          languages: ['en'],
          trialUntil: '2090-01',
          messages: {
            enabled: true,
            deleteDaysAfterCreation: 15
          },
          shippingRateInputType: {
            type: 'CartClassification',
            values: [
              {
                key: 'key',
                label: {
                  en: 'Key label',
                  es: 'Etiquieta'
                }
              }
            ]
          },
          externalOAuth: {
            url: 'http://localhost:3000',
            authorizationHeader: 'authorizationHeader'
          }
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
