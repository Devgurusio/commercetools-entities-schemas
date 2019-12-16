const Ajv = require("ajv");
const schema = require("../category");

describe("category", () => {
  let ajv;
  let data;
  let valid;

  describe("when success", () => {
    describe("when only required fields", () => {
      beforeAll(() => {
        data = {
          id: "cf5aa41c-2482-4b4e-b9f3-eb26d9e920f9",
          version: 1,
          createdAt: "2017-11-08T13:49:23.241Z",
          lastModifiedAt: "2017-11-08T13:49:23.241Z",
          name: { en: "name" },
          slug: { en: "slug" }
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
          id: "cf5aa41c-2482-4b4e-b9f3-eb26d9e920f9",
          version: 1,
          lastMessageSequenceNumber: 1,
          createdAt: "2017-11-08T13:49:23.241Z",
          lastModifiedAt: "2017-11-08T13:49:23.241Z",
          name: {
            en: "123123123"
          },
          slug: {
            en: "30ce4753-82d5-4f6a-9dd7-9ec81723dac1-123123123"
          },
          ancestors: [
            {
              typeId: "category",
              id: "f1a2b726-eb61-4edc-832b-c4a46be4b6b7"
            },
            {
              typeId: "category",
              id: "221eb81e-281a-4949-9908-04ec3c4b8e8e"
            },
            {
              typeId: "category",
              id: "a0dc7583-7168-4f11-a8cf-137d48c9ee58"
            },
            {
              typeId: "category",
              id: "8f49de03-bb03-4567-afbc-bd8594e93d80"
            },
            {
              typeId: "category",
              id: "30ce4753-82d5-4f6a-9dd7-9ec81723dac1"
            }
          ],
          parent: {
            typeId: "category",
            id: "30ce4753-82d5-4f6a-9dd7-9ec81723dac1"
          },
          orderHint: "0.00001510148963241898188514",
          externalId: "externalId",
          metaTitle: { en: "metaTitle" },
          metaDescription: { en: "metaDescription" },
          metaKeyword: { en: "metaKeyword" },
          custom: {
            type: {
              typeId: "type",
              id: "51352705-714b-4f6e-9c7f-e6458514c291"
            },
            fields: {
              key: "value"
            }
          },
          assets: [
            {
              id: "f74b4e9f-2c03-4178-9ba4-bf6d6160a597",
              key: "key",
              sources: [
                {
                  uri: "http://localhost:3000/my-asset",
                  key: "key",
                  dimensions: {
                    w: 640,
                    h: 480
                  },
                  contentType: "image/jpeg"
                }
              ],
              name: { en: "asset name", es: "nombre del asset" },
              description: {
                en: "asset description",
                es: "descripción del asset"
              },
              tags: ["images", "myasset"],
              custom: {
                type: {
                  typeId: "product",
                  id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
                },
                fields: {
                  description: "my description"
                }
              }
            }
          ]
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
    describe("when missing id property", () => {
      beforeAll(() => {
        data = {
          version: 1,
          lastMessageSequenceNumber: 1,
          createdAt: "2017-11-08T13:49:23.241Z",
          lastModifiedAt: "2017-11-08T13:49:23.241Z",
          name: {
            en: "123123123"
          },
          slug: {
            en: "30ce4753-82d5-4f6a-9dd7-9ec81723dac1-123123123"
          },
          ancestors: [
            {
              typeId: "category",
              id: "f1a2b726-eb61-4edc-832b-c4a46be4b6b7"
            },
            {
              typeId: "category",
              id: "221eb81e-281a-4949-9908-04ec3c4b8e8e"
            },
            {
              typeId: "category",
              id: "a0dc7583-7168-4f11-a8cf-137d48c9ee58"
            },
            {
              typeId: "category",
              id: "8f49de03-bb03-4567-afbc-bd8594e93d80"
            },
            {
              typeId: "category",
              id: "30ce4753-82d5-4f6a-9dd7-9ec81723dac1"
            }
          ],
          parent: {
            typeId: "category",
            id: "30ce4753-82d5-4f6a-9dd7-9ec81723dac1"
          },
          orderHint: "0.00001510148963241898188514",
          externalId: "externalId",
          metaTitle: { en: "metaTitle" },
          metaDescription: { en: "metaDescription" },
          metaKeyword: { en: "metaKeyword" },
          custom: {
            type: {
              typeId: "type",
              id: "51352705-714b-4f6e-9c7f-e6458514c291"
            },
            fields: {
              key: "value"
            }
          },
          assets: [
            {
              id: "f74b4e9f-2c03-4178-9ba4-bf6d6160a597",
              key: "key",
              sources: [
                {
                  uri: "http://localhost:3000/my-asset",
                  key: "key",
                  dimensions: {
                    w: 640,
                    h: 480
                  },
                  contentType: "image/jpeg"
                }
              ],
              name: { en: "asset name", es: "nombre del asset" },
              description: {
                en: "asset description",
                es: "descripción del asset"
              },
              tags: ["images", "myasset"],
              custom: {
                type: {
                  typeId: "product",
                  id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
                },
                fields: {
                  description: "my description"
                }
              }
            }
          ]
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

    describe("when missing version property", () => {
      beforeAll(() => {
        data = {
          id: "cf5aa41c-2482-4b4e-b9f3-eb26d9e920f9",
          lastMessageSequenceNumber: 1,
          createdAt: "2017-11-08T13:49:23.241Z",
          lastModifiedAt: "2017-11-08T13:49:23.241Z",
          name: {
            en: "123123123"
          },
          slug: {
            en: "30ce4753-82d5-4f6a-9dd7-9ec81723dac1-123123123"
          },
          ancestors: [
            {
              typeId: "category",
              id: "f1a2b726-eb61-4edc-832b-c4a46be4b6b7"
            },
            {
              typeId: "category",
              id: "221eb81e-281a-4949-9908-04ec3c4b8e8e"
            },
            {
              typeId: "category",
              id: "a0dc7583-7168-4f11-a8cf-137d48c9ee58"
            },
            {
              typeId: "category",
              id: "8f49de03-bb03-4567-afbc-bd8594e93d80"
            },
            {
              typeId: "category",
              id: "30ce4753-82d5-4f6a-9dd7-9ec81723dac1"
            }
          ],
          parent: {
            typeId: "category",
            id: "30ce4753-82d5-4f6a-9dd7-9ec81723dac1"
          },
          orderHint: "0.00001510148963241898188514",
          externalId: "externalId",
          metaTitle: { en: "metaTitle" },
          metaDescription: { en: "metaDescription" },
          metaKeyword: { en: "metaKeyword" },
          custom: {
            type: {
              typeId: "type",
              id: "51352705-714b-4f6e-9c7f-e6458514c291"
            },
            fields: {
              key: "value"
            }
          },
          assets: [
            {
              id: "f74b4e9f-2c03-4178-9ba4-bf6d6160a597",
              key: "key",
              sources: [
                {
                  uri: "http://localhost:3000/my-asset",
                  key: "key",
                  dimensions: {
                    w: 640,
                    h: 480
                  },
                  contentType: "image/jpeg"
                }
              ],
              name: { en: "asset name", es: "nombre del asset" },
              description: {
                en: "asset description",
                es: "descripción del asset"
              },
              tags: ["images", "myasset"],
              custom: {
                type: {
                  typeId: "product",
                  id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
                },
                fields: {
                  description: "my description"
                }
              }
            }
          ]
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

    describe("when missing createdAt property", () => {
      beforeAll(() => {
        data = {
          id: "cf5aa41c-2482-4b4e-b9f3-eb26d9e920f9",
          version: 1,
          lastMessageSequenceNumber: 1,
          lastModifiedAt: "2017-11-08T13:49:23.241Z",
          name: {
            en: "123123123"
          },
          slug: {
            en: "30ce4753-82d5-4f6a-9dd7-9ec81723dac1-123123123"
          },
          ancestors: [
            {
              typeId: "category",
              id: "f1a2b726-eb61-4edc-832b-c4a46be4b6b7"
            },
            {
              typeId: "category",
              id: "221eb81e-281a-4949-9908-04ec3c4b8e8e"
            },
            {
              typeId: "category",
              id: "a0dc7583-7168-4f11-a8cf-137d48c9ee58"
            },
            {
              typeId: "category",
              id: "8f49de03-bb03-4567-afbc-bd8594e93d80"
            },
            {
              typeId: "category",
              id: "30ce4753-82d5-4f6a-9dd7-9ec81723dac1"
            }
          ],
          parent: {
            typeId: "category",
            id: "30ce4753-82d5-4f6a-9dd7-9ec81723dac1"
          },
          orderHint: "0.00001510148963241898188514",
          externalId: "externalId",
          metaTitle: { en: "metaTitle" },
          metaDescription: { en: "metaDescription" },
          metaKeyword: { en: "metaKeyword" },
          custom: {
            type: {
              typeId: "type",
              id: "51352705-714b-4f6e-9c7f-e6458514c291"
            },
            fields: {
              key: "value"
            }
          },
          assets: [
            {
              id: "f74b4e9f-2c03-4178-9ba4-bf6d6160a597",
              key: "key",
              sources: [
                {
                  uri: "http://localhost:3000/my-asset",
                  key: "key",
                  dimensions: {
                    w: 640,
                    h: 480
                  },
                  contentType: "image/jpeg"
                }
              ],
              name: { en: "asset name", es: "nombre del asset" },
              description: {
                en: "asset description",
                es: "descripción del asset"
              },
              tags: ["images", "myasset"],
              custom: {
                type: {
                  typeId: "product",
                  id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
                },
                fields: {
                  description: "my description"
                }
              }
            }
          ]
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

    describe("when missing lastModifiedAt property", () => {
      beforeAll(() => {
        data = {
          id: "cf5aa41c-2482-4b4e-b9f3-eb26d9e920f9",
          version: 1,
          lastMessageSequenceNumber: 1,
          createdAt: "2017-11-08T13:49:23.241Z",
          name: {
            en: "123123123"
          },
          slug: {
            en: "30ce4753-82d5-4f6a-9dd7-9ec81723dac1-123123123"
          },
          ancestors: [
            {
              typeId: "category",
              id: "f1a2b726-eb61-4edc-832b-c4a46be4b6b7"
            },
            {
              typeId: "category",
              id: "221eb81e-281a-4949-9908-04ec3c4b8e8e"
            },
            {
              typeId: "category",
              id: "a0dc7583-7168-4f11-a8cf-137d48c9ee58"
            },
            {
              typeId: "category",
              id: "8f49de03-bb03-4567-afbc-bd8594e93d80"
            },
            {
              typeId: "category",
              id: "30ce4753-82d5-4f6a-9dd7-9ec81723dac1"
            }
          ],
          parent: {
            typeId: "category",
            id: "30ce4753-82d5-4f6a-9dd7-9ec81723dac1"
          },
          orderHint: "0.00001510148963241898188514",
          externalId: "externalId",
          metaTitle: { en: "metaTitle" },
          metaDescription: { en: "metaDescription" },
          metaKeyword: { en: "metaKeyword" },
          custom: {
            type: {
              typeId: "type",
              id: "51352705-714b-4f6e-9c7f-e6458514c291"
            },
            fields: {
              key: "value"
            }
          },
          assets: [
            {
              id: "f74b4e9f-2c03-4178-9ba4-bf6d6160a597",
              key: "key",
              sources: [
                {
                  uri: "http://localhost:3000/my-asset",
                  key: "key",
                  dimensions: {
                    w: 640,
                    h: 480
                  },
                  contentType: "image/jpeg"
                }
              ],
              name: { en: "asset name", es: "nombre del asset" },
              description: {
                en: "asset description",
                es: "descripción del asset"
              },
              tags: ["images", "myasset"],
              custom: {
                type: {
                  typeId: "product",
                  id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
                },
                fields: {
                  description: "my description"
                }
              }
            }
          ]
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

    describe("when missing name property", () => {
      beforeAll(() => {
        data = {
          id: "cf5aa41c-2482-4b4e-b9f3-eb26d9e920f9",
          version: 1,
          lastMessageSequenceNumber: 1,
          createdAt: "2017-11-08T13:49:23.241Z",
          lastModifiedAt: "2017-11-08T13:49:23.241Z",
          slug: {
            en: "30ce4753-82d5-4f6a-9dd7-9ec81723dac1-123123123"
          },
          ancestors: [
            {
              typeId: "category",
              id: "f1a2b726-eb61-4edc-832b-c4a46be4b6b7"
            },
            {
              typeId: "category",
              id: "221eb81e-281a-4949-9908-04ec3c4b8e8e"
            },
            {
              typeId: "category",
              id: "a0dc7583-7168-4f11-a8cf-137d48c9ee58"
            },
            {
              typeId: "category",
              id: "8f49de03-bb03-4567-afbc-bd8594e93d80"
            },
            {
              typeId: "category",
              id: "30ce4753-82d5-4f6a-9dd7-9ec81723dac1"
            }
          ],
          parent: {
            typeId: "category",
            id: "30ce4753-82d5-4f6a-9dd7-9ec81723dac1"
          },
          orderHint: "0.00001510148963241898188514",
          externalId: "externalId",
          metaTitle: { en: "metaTitle" },
          metaDescription: { en: "metaDescription" },
          metaKeyword: { en: "metaKeyword" },
          custom: {
            type: {
              typeId: "type",
              id: "51352705-714b-4f6e-9c7f-e6458514c291"
            },
            fields: {
              key: "value"
            }
          },
          assets: [
            {
              id: "f74b4e9f-2c03-4178-9ba4-bf6d6160a597",
              key: "key",
              sources: [
                {
                  uri: "http://localhost:3000/my-asset",
                  key: "key",
                  dimensions: {
                    w: 640,
                    h: 480
                  },
                  contentType: "image/jpeg"
                }
              ],
              name: { en: "asset name", es: "nombre del asset" },
              description: {
                en: "asset description",
                es: "descripción del asset"
              },
              tags: ["images", "myasset"],
              custom: {
                type: {
                  typeId: "product",
                  id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
                },
                fields: {
                  description: "my description"
                }
              }
            }
          ]
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
          id: "cf5aa41c-2482-4b4e-b9f3-eb26d9e920f9",
          version: 1,
          lastMessageSequenceNumber: 1,
          createdAt: "2017-11-08T13:49:23.241Z",
          lastModifiedAt: "2017-11-08T13:49:23.241Z",
          name: {
            en: "123123123"
          },
          ancestors: [
            {
              typeId: "category",
              id: "f1a2b726-eb61-4edc-832b-c4a46be4b6b7"
            },
            {
              typeId: "category",
              id: "221eb81e-281a-4949-9908-04ec3c4b8e8e"
            },
            {
              typeId: "category",
              id: "a0dc7583-7168-4f11-a8cf-137d48c9ee58"
            },
            {
              typeId: "category",
              id: "8f49de03-bb03-4567-afbc-bd8594e93d80"
            },
            {
              typeId: "category",
              id: "30ce4753-82d5-4f6a-9dd7-9ec81723dac1"
            }
          ],
          parent: {
            typeId: "category",
            id: "30ce4753-82d5-4f6a-9dd7-9ec81723dac1"
          },
          orderHint: "0.00001510148963241898188514",
          externalId: "externalId",
          metaTitle: { en: "metaTitle" },
          metaDescription: { en: "metaDescription" },
          metaKeyword: { en: "metaKeyword" },
          custom: {
            type: {
              typeId: "type",
              id: "51352705-714b-4f6e-9c7f-e6458514c291"
            },
            fields: {
              key: "value"
            }
          },
          assets: [
            {
              id: "f74b4e9f-2c03-4178-9ba4-bf6d6160a597",
              key: "key",
              sources: [
                {
                  uri: "http://localhost:3000/my-asset",
                  key: "key",
                  dimensions: {
                    w: 640,
                    h: 480
                  },
                  contentType: "image/jpeg"
                }
              ],
              name: { en: "asset name", es: "nombre del asset" },
              description: {
                en: "asset description",
                es: "descripción del asset"
              },
              tags: ["images", "myasset"],
              custom: {
                type: {
                  typeId: "product",
                  id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
                },
                fields: {
                  description: "my description"
                }
              }
            }
          ]
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
