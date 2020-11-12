const Ajv = require('ajv');
const schema = require('../productCatalogData');

describe('productCatalogData', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    beforeAll(() => {
      data = {
        published: true,
        current: {
          name: {
            en: 'Product name',
            es: 'Nombre del producto'
          },
          slug: {
            en: 'product-name',
            es: 'nombre-del-producto'
          },
          masterVariant: {
            id: 1
          }
        },
        staged: {
          name: {
            en: 'Product name',
            es: 'Nombre del producto'
          },
          slug: {
            en: 'product-name',
            es: 'nombre-del-producto'
          },
          masterVariant: {
            id: 1
          }
        },
        hasStagedChanges: false
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

  describe('when error', () => {
    describe('when missing published property', () => {
      beforeAll(() => {
        data = {
          current: {
            name: {
              en: 'Product name',
              es: 'Nombre del producto'
            },
            slug: {
              en: 'product-name',
              es: 'nombre-del-producto'
            },
            masterVariant: {
              id: 1
            }
          },
          staged: {
            name: {
              en: 'Product name',
              es: 'Nombre del producto'
            },
            slug: {
              en: 'product-name',
              es: 'nombre-del-producto'
            },
            masterVariant: {
              id: 1
            }
          },
          hasStagedChanges: false
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

    describe('when missing current property', () => {
      beforeAll(() => {
        data = {
          published: true,
          staged: {
            name: {
              en: 'Product name',
              es: 'Nombre del producto'
            },
            slug: {
              en: 'product-name',
              es: 'nombre-del-producto'
            },
            masterVariant: {
              id: 1
            }
          },
          hasStagedChanges: false
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

    describe('when missing staged property', () => {
      beforeAll(() => {
        data = {
          published: true,
          current: {
            name: {
              en: 'Product name',
              es: 'Nombre del producto'
            },
            slug: {
              en: 'product-name',
              es: 'nombre-del-producto'
            },
            masterVariant: {
              id: 1
            }
          },
          hasStagedChanges: false
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

    describe('when missing hasStagedChanges property', () => {
      beforeAll(() => {
        data = {
          published: true,
          current: {
            name: {
              en: 'Product name',
              es: 'Nombre del producto'
            },
            slug: {
              en: 'product-name',
              es: 'nombre-del-producto'
            },
            masterVariant: {
              id: 1
            }
          },
          staged: {
            name: {
              en: 'Product name',
              es: 'Nombre del producto'
            },
            slug: {
              en: 'product-name',
              es: 'nombre-del-producto'
            },
            masterVariant: {
              id: 1
            }
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
