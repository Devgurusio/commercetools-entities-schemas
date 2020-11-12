const Ajv = require('ajv');
const schema = require('../shoppingList');

describe('shoppingList', () => {
  let ajv;
  let valid;

  describe('when success', () => {
    let data;

    beforeAll(() => {
      data = {
        id: 'fd116111-8802-4c70-9305-d6855d1466da',
        version: 17,
        createdAt: '2017-11-10T15:25:02.411Z',
        lastModifiedAt: '2017-11-22T14:20:21.819Z',
        name: {
          en: '1-CustomizedProductShoppingList'
        },
        lineItems: [
          {
            id: 'a815ecc7-4c1e-438c-b7df-41fcd92cdc6c',
            productId: '88fbdcaf-40c7-4bd6-8696-70dcea59893a',
            name: {
              en: 'product1TestNew'
            },
            productType: {
              typeId: 'product-type',
              id: 'ea130ef7-b016-4f18-b8e4-212f15c2bd30'
            },
            variantId: 1,
            quantity: 2,
            addedAt: '2017-11-10T15:25:02.393Z'
          },
          {
            id: 'f87373fe-dd4b-40c1-acf7-7e503c84118e',
            productId: '14f84c59-7443-47fe-b24c-271bdd6f497a',
            name: {
              en:
                '88fbdcaf-40c7-4bd6-8696-70dcea59893a_undefined_a99a08d8-f6e8-4bdd-b0aa-96e7ed211c29_undefined'
            },
            productType: {
              typeId: 'product-type',
              id: 'a6b51a05-5294-4873-9336-5966bc139a76'
            },
            quantity: 2,
            addedAt: '2017-11-16T10:32:54.544Z',
            deactivatedAt: '2017-11-22T14:20:21.768Z'
          },
          {
            id: '0b66e292-67f0-4855-9744-fac4bb0267da',
            productId: '730e49df-a328-4750-94b3-2d5e4e644cf7',
            name: {
              en:
                '88fbdcaf-40c7-4bd6-8696-70dcea59893a_1_6c617e02-71c3-4f90-8c0f-deb8bc0bda2c_3'
            },
            productType: {
              typeId: 'product-type',
              id: 'a6b51a05-5294-4873-9336-5966bc139a76'
            },
            quantity: 2,
            addedAt: '2017-11-16T10:32:54.544Z',
            deactivatedAt: '2017-11-22T14:20:04.389Z'
          },
          {
            id: '450f6914-d850-4663-999e-8afc234532bc',
            productId: 'dd5f4b45-7fdc-485c-b9b5-6defb854e314',
            name: {
              en:
                '88fbdcaf-40c7-4bd6-8696-70dcea59893a_undefined_9db4e2ee-a187-42a1-8bfd-e7a3d12cf92d_undefined'
            },
            productType: {
              typeId: 'product-type',
              id: 'a6b51a05-5294-4873-9336-5966bc139a76'
            },
            quantity: 2,
            addedAt: '2017-11-16T10:32:54.544Z',
            deactivatedAt: '2017-11-22T14:20:10.396Z'
          },
          {
            id: '75e712af-ec99-4e9d-85c8-0f045d1a941e',
            productId: 'a836599f-171a-4eba-98d4-7854d00eb72d',
            name: {
              en:
                '88fbdcaf-40c7-4bd6-8696-70dcea59893a_undefined_6c617e02-71c3-4f90-8c0f-deb8bc0bda2c_undefined'
            },
            productType: {
              typeId: 'product-type',
              id: 'a6b51a05-5294-4873-9336-5966bc139a76'
            },
            quantity: 2,
            addedAt: '2017-11-16T10:32:54.544Z',
            deactivatedAt: '2017-11-22T14:20:15.417Z'
          }
        ],
        textLineItems: []
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
