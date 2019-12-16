const Ajv = require("ajv");
const schema = require("../productData");

describe("productData", () => {
  let ajv;
  let data;
  let valid;

  describe("when success", () => {
    describe("when only required fields", () => {
      beforeAll(() => {
        data = {
          name: {
            en: "Product name",
            es: "Nombre del producto"
          },
          categories: [],
          categoryOrderHints: {
            "7efa63e4-d991-4986-9f6e-dea6638c3dbb": "0.27"
          },
          slug: {
            en: "product-slug",
            es: "slug-producto"
          },
          masterVariant: {
            id: 1,
            sku: "A1",
            key: "A4_1",
            prices: [],
            images: [
              {
                url:
                  "https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate-7-o83dH5_x.jpg",
                dimensions: {
                  w: 640,
                  h: 450
                }
              },
              {
                url:
                  "https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate-7-WxVGX_4x.jpg",
                dimensions: {
                  w: 640,
                  h: 450
                }
              },
              {
                url:
                  "https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate-7-5ZmCiie-.jpg",
                dimensions: {
                  w: 640,
                  h: 450
                }
              },
              {
                url:
                  "https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate-7-oUQL1f14.jpg",
                dimensions: {
                  w: 640,
                  h: 450
                }
              }
            ],
            attributes: [
              {
                name: "weight",
                value: 1
              }
            ],
            assets: []
          },
          variants: [],
          searchKeywords: {}
        };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should be valid", () => {
        expect(valid).toBeTruthy();
      });
    });

    describe("when all fields", () => {
      beforeAll(() => {
        data = {
          name: {
            en: "Product name",
            es: "Nombre del producto"
          },
          description: {
            en: "Product description",
            es: "Descripción del producto"
          },
          categories: [
            {
              typeId: "category",
              id: "7efa63e4-d991-4986-9f6e-dea6638c3dbb"
            }
          ],
          categoryOrderHints: {
            "7efa63e4-d991-4986-9f6e-dea6638c3dbb": "0.27"
          },
          slug: {
            en: "product-slug",
            es: "slug-producto"
          },
          metaTitle: {
            en: "metaTitle",
            es: "metaTitle"
          },
          metaDescription: {
            en: "metaDescription",
            es: "metaDescription"
          },
          metaKeywords: {
            en: "metaKeywords",
            es: "metaKeywords"
          },
          masterVariant: {
            id: 1,
            sku: "A1",
            key: "A4_1",
            prices: [],
            images: [
              {
                url:
                  "https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate-7-o83dH5_x.jpg",
                dimensions: {
                  w: 640,
                  h: 450
                }
              },
              {
                url:
                  "https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate-7-WxVGX_4x.jpg",
                dimensions: {
                  w: 640,
                  h: 450
                }
              },
              {
                url:
                  "https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate-7-5ZmCiie-.jpg",
                dimensions: {
                  w: 640,
                  h: 450
                }
              },
              {
                url:
                  "https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate-7-oUQL1f14.jpg",
                dimensions: {
                  w: 640,
                  h: 450
                }
              }
            ],
            attributes: [
              {
                name: "weight",
                value: 1
              }
            ],
            assets: []
          },
          variants: [
            {
              id: 2,
              sku: "A2",
              key: "A4_2",
              prices: [],
              images: [
                {
                  url:
                    "https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate_o-AAQJiqI1.jpg",
                  dimensions: {
                    w: 640,
                    h: 450
                  }
                },
                {
                  url:
                    "https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate_o-lKqSQ6Bm.jpg",
                  dimensions: {
                    w: 640,
                    h: 450
                  }
                }
              ],
              attributes: [
                {
                  name: "weight",
                  value: 2
                }
              ],
              assets: []
            }
          ],
          searchKeywords: {
            en: [{ text: "text" }],
            es: [{ text: "text" }]
          }
        };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should be valid", () => {
        expect(valid).toBeTruthy();
      });
    });
  });

  describe("when error", () => {
    describe("when missing name property", () => {
      beforeAll(() => {
        data = {
          description: {
            en: "Product description",
            es: "Descripción del producto"
          },
          categories: [
            {
              typeId: "category",
              id: "7efa63e4-d991-4986-9f6e-dea6638c3dbb"
            }
          ],
          categoryOrderHints: {
            "7efa63e4-d991-4986-9f6e-dea6638c3dbb": "0.27"
          },
          slug: {
            en: "product-slug",
            es: "slug-producto"
          },
          metaTitle: {
            en: "metaTitle",
            es: "metaTitle"
          },
          metaDescription: {
            en: "metaDescription",
            es: "metaDescription"
          },
          metaKeywords: {
            en: "metaKeywords",
            es: "metaKeywords"
          },
          masterVariant: {
            id: 1,
            sku: "A1",
            key: "A4_1",
            prices: [],
            images: [
              {
                url:
                  "https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate-7-o83dH5_x.jpg",
                dimensions: {
                  w: 640,
                  h: 450
                }
              },
              {
                url:
                  "https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate-7-WxVGX_4x.jpg",
                dimensions: {
                  w: 640,
                  h: 450
                }
              },
              {
                url:
                  "https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate-7-5ZmCiie-.jpg",
                dimensions: {
                  w: 640,
                  h: 450
                }
              },
              {
                url:
                  "https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate-7-oUQL1f14.jpg",
                dimensions: {
                  w: 640,
                  h: 450
                }
              }
            ],
            attributes: [
              {
                name: "weight",
                value: 1
              }
            ],
            assets: []
          },
          variants: [
            {
              id: 2,
              sku: "A2",
              key: "A4_2",
              prices: [],
              images: [
                {
                  url:
                    "https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate_o-AAQJiqI1.jpg",
                  dimensions: {
                    w: 640,
                    h: 450
                  }
                },
                {
                  url:
                    "https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate_o-lKqSQ6Bm.jpg",
                  dimensions: {
                    w: 640,
                    h: 450
                  }
                }
              ],
              attributes: [
                {
                  name: "weight",
                  value: 2
                }
              ],
              assets: []
            }
          ],
          searchKeywords: {
            en: [{ text: "text" }],
            es: [{ text: "text" }]
          }
        };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should not be valid", () => {
        expect(valid).toBeFalsy();
      });
    });

    describe("when missing slug property", () => {
      beforeAll(() => {
        data = {
          name: {
            en: "Product name",
            es: "Nombre del producto"
          },
          description: {
            en: "Product description",
            es: "Descripción del producto"
          },
          categories: [
            {
              typeId: "category",
              id: "7efa63e4-d991-4986-9f6e-dea6638c3dbb"
            }
          ],
          categoryOrderHints: {
            "7efa63e4-d991-4986-9f6e-dea6638c3dbb": "0.27"
          },
          metaTitle: {
            en: "metaTitle",
            es: "metaTitle"
          },
          metaDescription: {
            en: "metaDescription",
            es: "metaDescription"
          },
          metaKeywords: {
            en: "metaKeywords",
            es: "metaKeywords"
          },
          masterVariant: {
            id: 1,
            sku: "A1",
            key: "A4_1",
            prices: [],
            images: [
              {
                url:
                  "https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate-7-o83dH5_x.jpg",
                dimensions: {
                  w: 640,
                  h: 450
                }
              },
              {
                url:
                  "https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate-7-WxVGX_4x.jpg",
                dimensions: {
                  w: 640,
                  h: 450
                }
              },
              {
                url:
                  "https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate-7-5ZmCiie-.jpg",
                dimensions: {
                  w: 640,
                  h: 450
                }
              },
              {
                url:
                  "https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate-7-oUQL1f14.jpg",
                dimensions: {
                  w: 640,
                  h: 450
                }
              }
            ],
            attributes: [
              {
                name: "weight",
                value: 1
              }
            ],
            assets: []
          },
          variants: [
            {
              id: 2,
              sku: "A2",
              key: "A4_2",
              prices: [],
              images: [
                {
                  url:
                    "https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate_o-AAQJiqI1.jpg",
                  dimensions: {
                    w: 640,
                    h: 450
                  }
                },
                {
                  url:
                    "https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate_o-lKqSQ6Bm.jpg",
                  dimensions: {
                    w: 640,
                    h: 450
                  }
                }
              ],
              attributes: [
                {
                  name: "weight",
                  value: 2
                }
              ],
              assets: []
            }
          ],
          searchKeywords: {
            en: [{ text: "text" }],
            es: [{ text: "text" }]
          }
        };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should not be valid", () => {
        expect(valid).toBeFalsy();
      });
    });

    describe("when missing masterVariant property", () => {
      beforeAll(() => {
        data = {
          name: {
            en: "Product name",
            es: "Nombre del producto"
          },
          description: {
            en: "Product description",
            es: "Descripción del producto"
          },
          categories: [
            {
              typeId: "category",
              id: "7efa63e4-d991-4986-9f6e-dea6638c3dbb"
            }
          ],
          categoryOrderHints: {
            "7efa63e4-d991-4986-9f6e-dea6638c3dbb": "0.27"
          },
          slug: {
            en: "product-slug",
            es: "slug-producto"
          },
          metaTitle: {
            en: "metaTitle",
            es: "metaTitle"
          },
          metaDescription: {
            en: "metaDescription",
            es: "metaDescription"
          },
          metaKeywords: {
            en: "metaKeywords",
            es: "metaKeywords"
          },
          variants: [],
          searchKeywords: {
            en: [{ text: "text" }],
            es: [{ text: "text" }]
          }
        };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should not be valid", () => {
        expect(valid).toBeFalsy();
      });
    });
  });
});
