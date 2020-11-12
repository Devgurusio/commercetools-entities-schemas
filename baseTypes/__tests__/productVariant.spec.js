const Ajv = require('ajv');
const schema = require('../productVariant');

describe('productVariant', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when only required fields', () => {
      beforeAll(() => {
        data = { id: 1 };
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
          id: 1,
          sku: 'sku1',
          key: 'key1',
          prices: [
            {
              id: '462ac753-82d5-4f6a-9dd7-9ec81723dac1',
              value: {
                currencyCode: 'EUR',
                centAmount: 400
              },
              country: 'ES',
              customerGroup: {
                typeId: 'customer',
                id: '462ac753-82d5-4f6a-9dd7-9ec81723dac1'
              },
              channel: {
                typeId: 'channel',
                id: '462ac753-82d5-4f6a-9dd7-9ec81723dac1'
              },
              validFrom: '1983-08-17T17:00:00Z',
              validUntil: '1983-08-17T17:00:00Z',
              tiers: [
                {
                  minimumQuantity: 3,
                  value: {
                    currencyCode: 'EUR',
                    centAmount: 400
                  }
                }
              ],
              discounted: {
                value: {
                  currencyCode: 'EUR',
                  centAmount: 400
                },
                discount: {
                  typeId: 'discount',
                  id: '462ac753-82d5-4f6a-9dd7-9ec81723dac1'
                }
              },
              custom: {
                type: {
                  typeId: 'type',
                  id: '1f0d7e26-fe73-4277-93cf-2735d898d300'
                },
                fields: {
                  attribute: 'value'
                }
              }
            }
          ],
          attributes: [
            {
              name: 'weight',
              value: 1
            }
          ],
          price: {
            id: '462ac753-82d5-4f6a-9dd7-9ec81723dac1',
            value: {
              currencyCode: 'EUR',
              centAmount: 400
            },
            country: 'ES',
            customerGroup: {
              typeId: 'customer',
              id: '462ac753-82d5-4f6a-9dd7-9ec81723dac1'
            },
            channel: {
              typeId: 'channel',
              id: '462ac753-82d5-4f6a-9dd7-9ec81723dac1'
            },
            validFrom: '1983-08-17T17:00:00Z',
            validUntil: '1983-08-17T17:00:00Z',
            tiers: [
              {
                minimumQuantity: 3,
                value: {
                  currencyCode: 'EUR',
                  centAmount: 400
                }
              }
            ],
            discounted: {
              value: {
                currencyCode: 'EUR',
                centAmount: 400
              },
              discount: {
                typeId: 'discount',
                id: '462ac753-82d5-4f6a-9dd7-9ec81723dac1'
              }
            },
            custom: {
              type: {
                typeId: 'type',
                id: '1f0d7e26-fe73-4277-93cf-2735d898d300'
              },
              fields: {
                attribute: 'value'
              }
            }
          },
          images: [
            {
              url:
                'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate-7-o83dH5_x.jpg',
              dimensions: {
                w: 640,
                h: 450
              }
            },
            {
              url:
                'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate-7-WxVGX_4x.jpg',
              dimensions: {
                w: 640,
                h: 450
              }
            },
            {
              url:
                'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate-7-5ZmCiie-.jpg',
              dimensions: {
                w: 640,
                h: 450
              }
            },
            {
              url:
                'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate-7-oUQL1f14.jpg',
              dimensions: {
                w: 640,
                h: 450
              }
            }
          ],
          assets: [
            {
              id: 'f74b4e9f-2c03-4178-9ba4-bf6d6160a597',
              key: 'key',
              sources: [
                {
                  uri: 'http://localhost:3000/my-asset',
                  key: 'key',
                  dimensions: {
                    w: 640,
                    h: 480
                  },
                  contentType: 'image/jpeg'
                }
              ],
              name: { en: 'asset name', es: 'nombre del asset' },
              description: {
                en: 'asset description',
                es: 'descripción del asset'
              },
              tags: ['images', 'myasset'],
              custom: {
                type: {
                  typeId: 'product',
                  id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
                },
                fields: {
                  description: 'my description'
                }
              }
            }
          ],
          availability: {
            isOnStock: true,
            restockableInDays: 3,
            availableQuantity: 501,
            channels: {
              'f74b4e9f-2c01-4178-9ba5-bf6d6167a597': {
                isOnStock: true,
                restockableInDays: 3,
                availableQuantity: 501
              }
            }
          },
          isMatchingVariant: true,
          scopedPrice: {
            id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597',
            value: {
              currencyCode: 'EUR',
              centAmount: 400
            },
            currentValue: {
              currencyCode: 'EUR',
              centAmount: 400
            },
            country: 'ES',
            customerGroup: {
              typeId: 'customer-group',
              id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
            },
            channel: {
              typeId: 'channel',
              id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
            },
            validFrom: '1983-08-17T17:00:00Z',
            validUntil: '1983-08-17T17:00:00Z',
            discounted: {
              value: {
                currencyCode: 'EUR',
                centAmount: 400
              },
              discount: {
                typeId: 'discount',
                id: '462ac753-82d5-4f6a-9dd7-9ec81723dac1'
              }
            },
            custom: {
              type: {
                typeId: 'type',
                id: '1f0d7e26-fe73-4277-93cf-2735d898d300'
              },
              fields: {
                attribute: 'value'
              }
            }
          },
          scopedPriceDiscounted: false
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
    describe('when missing id property', () => {
      beforeAll(() => {
        data = {
          sku: 'sku1',
          key: 'key1',
          prices: [
            {
              id: '462ac753-82d5-4f6a-9dd7-9ec81723dac1',
              value: {
                currencyCode: 'EUR',
                centAmount: 400
              },
              country: 'ES',
              customerGroup: {
                typeId: 'customer',
                id: '462ac753-82d5-4f6a-9dd7-9ec81723dac1'
              },
              channel: {
                typeId: 'channel',
                id: '462ac753-82d5-4f6a-9dd7-9ec81723dac1'
              },
              validFrom: '1983-08-17T17:00:00Z',
              validUntil: '1983-08-17T17:00:00Z',
              tiers: [
                {
                  minimumQuantity: 3,
                  value: {
                    currencyCode: 'EUR',
                    centAmount: 400
                  }
                }
              ],
              discounted: {
                value: {
                  currencyCode: 'EUR',
                  centAmount: 400
                },
                discount: {
                  typeId: 'discount',
                  id: '462ac753-82d5-4f6a-9dd7-9ec81723dac1'
                }
              },
              custom: {
                type: {
                  typeId: 'type',
                  id: '1f0d7e26-fe73-4277-93cf-2735d898d300'
                },
                fields: {
                  attribute: 'value'
                }
              }
            }
          ],
          attributes: [
            {
              name: 'weight',
              value: 1
            }
          ],
          price: {
            id: '462ac753-82d5-4f6a-9dd7-9ec81723dac1',
            value: {
              currencyCode: 'EUR',
              centAmount: 400
            },
            country: 'ES',
            customerGroup: {
              typeId: 'customer',
              id: '462ac753-82d5-4f6a-9dd7-9ec81723dac1'
            },
            channel: {
              typeId: 'channel',
              id: '462ac753-82d5-4f6a-9dd7-9ec81723dac1'
            },
            validFrom: '1983-08-17T17:00:00Z',
            validUntil: '1983-08-17T17:00:00Z',
            tiers: [
              {
                minimumQuantity: 3,
                value: {
                  currencyCode: 'EUR',
                  centAmount: 400
                }
              }
            ],
            discounted: {
              value: {
                currencyCode: 'EUR',
                centAmount: 400
              },
              discount: {
                typeId: 'discount',
                id: '462ac753-82d5-4f6a-9dd7-9ec81723dac1'
              }
            },
            custom: {
              type: {
                typeId: 'type',
                id: '1f0d7e26-fe73-4277-93cf-2735d898d300'
              },
              fields: {
                attribute: 'value'
              }
            }
          },
          images: [
            {
              url:
                'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate-7-o83dH5_x.jpg',
              dimensions: {
                w: 640,
                h: 450
              }
            },
            {
              url:
                'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate-7-WxVGX_4x.jpg',
              dimensions: {
                w: 640,
                h: 450
              }
            },
            {
              url:
                'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate-7-5ZmCiie-.jpg',
              dimensions: {
                w: 640,
                h: 450
              }
            },
            {
              url:
                'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate-7-oUQL1f14.jpg',
              dimensions: {
                w: 640,
                h: 450
              }
            }
          ],
          assets: [
            {
              id: 'f74b4e9f-2c03-4178-9ba4-bf6d6160a597',
              key: 'key',
              sources: [
                {
                  uri: 'http://localhost:3000/my-asset',
                  key: 'key',
                  dimensions: {
                    w: 640,
                    h: 480
                  },
                  contentType: 'image/jpeg'
                }
              ],
              name: { en: 'asset name', es: 'nombre del asset' },
              description: {
                en: 'asset description',
                es: 'descripción del asset'
              },
              tags: ['images', 'myasset'],
              custom: {
                type: {
                  typeId: 'product',
                  id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
                },
                fields: {
                  description: 'my description'
                }
              }
            }
          ],
          availability: {
            isOnStock: true,
            restockableInDays: 3,
            availableQuantity: 501,
            channels: {
              'f74b4e9f-2c01-4178-9ba5-bf6d6167a597': {
                isOnStock: true,
                restockableInDays: 3,
                availableQuantity: 501
              }
            }
          },
          isMatchingVariant: true,
          scopedPrice: {
            id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597',
            value: {
              currencyCode: 'EUR',
              centAmount: 400
            },
            currentValue: {
              currencyCode: 'EUR',
              centAmount: 400
            },
            country: 'ES',
            customerGroup: {
              typeId: 'customer-group',
              id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
            },
            channel: {
              typeId: 'channel',
              id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
            },
            validFrom: '1983-08-17T17:00:00Z',
            validUntil: '1983-08-17T17:00:00Z',
            discounted: {
              value: {
                currencyCode: 'EUR',
                centAmount: 400
              },
              discount: {
                typeId: 'discount',
                id: '462ac753-82d5-4f6a-9dd7-9ec81723dac1'
              }
            },
            custom: {
              type: {
                typeId: 'type',
                id: '1f0d7e26-fe73-4277-93cf-2735d898d300'
              },
              fields: {
                attribute: 'value'
              }
            }
          },
          scopedPriceDiscounted: false
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
