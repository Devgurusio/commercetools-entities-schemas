const Ajv = require('ajv');
const schema = require('../myShoppingListDraft');

describe('myShoppingListDraft', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when only required fields', () => {
      beforeAll(() => {
        data = {
          name: {
            en: 'My shopping list',
            es: 'Mi lista de la compra'
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

    describe('when all fields', () => {
      beforeAll(() => {
        data = {
          name: {
            en: 'My shopping list name',
            es: 'Nombre de mi lista de la compra'
          },
          description: {
            en: 'My shopping list description',
            es: 'Descripción de mi lista de la compra'
          },
          lineItems: [
            {
              sku: 'sku',
              quantity: 7,
              addedAt: '2017-10-04T14:31:41.643Z',
              custom: {
                type: {
                  typeId: 'customer',
                  id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
                },
                fields: {
                  description: 'my description'
                }
              }
            }
          ],
          textLineItems: [
            {
              name: { en: 'Product name', es: 'Nombre del producto' },
              description: {
                en: 'Product description',
                es: 'Descripción del producto'
              },
              quantity: 2,
              addedAt: '2017-10-04T14:31:41.643Z',
              custom: {
                type: {
                  typeId: 'customer',
                  id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
                },
                fields: {
                  description: 'my description'
                }
              }
            }
          ],
          custom: {
            type: {
              typeId: 'customer',
              id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
            },
            fields: {
              description: 'my description'
            }
          },
          deleteDaysAfterLastModification: 30
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
    describe('when missing name property', () => {
      beforeAll(() => {
        data = {
          description: {
            en: 'My shopping list description',
            es: 'Descripción de mi lista de la compra'
          },
          lineItems: [
            {
              sku: 'sku',
              quantity: 7,
              addedAt: '2017-10-04T14:31:41.643Z',
              custom: {
                type: {
                  typeId: 'customer',
                  id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
                },
                fields: {
                  description: 'my description'
                }
              }
            }
          ],
          textLineItems: [
            {
              name: { en: 'Product name', es: 'Nombre del producto' },
              description: {
                en: 'Product description',
                es: 'Descripción del producto'
              },
              quantity: 2,
              addedAt: '2017-10-04T14:31:41.643Z',
              custom: {
                type: {
                  typeId: 'customer',
                  id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
                },
                fields: {
                  description: 'my description'
                }
              }
            }
          ],
          custom: {
            type: {
              typeId: 'customer',
              id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
            },
            fields: {
              description: 'my description'
            }
          },
          deleteDaysAfterLastModification: 30
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
