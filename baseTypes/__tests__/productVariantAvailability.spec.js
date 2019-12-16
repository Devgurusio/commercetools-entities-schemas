const Ajv = require("ajv");
const schema = require("../productVariantAvailability");

describe("productVariantAvailability", () => {
  let ajv;
  let data;
  let valid;

  describe("when success", () => {
    beforeAll(() => {
      data = {
        isOnStock: true,
        restockableInDays: 3,
        availableQuantity: 501,
        channels: {
          "f74b4e9f-2c01-4178-9ba5-bf6d6167a597": {
            isOnStock: true,
            restockableInDays: 3,
            availableQuantity: 501
          }
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
