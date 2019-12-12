const Ajv = require("ajv");
const schema = require("../category");

describe("shoppingList", () => {
  let ajv;
  let valid;

  describe("when success", () => {
    let data;

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
        custom: {
          type: {
            typeId: "type",
            id: "51352705-714b-4f6e-9c7f-e6458514c291"
          },
          fields: {
            include: []
          }
        },
        assets: []
      };
      ajv = Ajv();
    });

    beforeEach(() => {
      valid = ajv.validate(schema, data);
    });

    test("should be valid", () => {
      console.log(valid);
      console.log(ajv.errors);
      expect(valid).toBeTruthy();
    });
  });
});
