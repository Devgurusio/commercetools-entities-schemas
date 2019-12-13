const Ajv = require("ajv");
const schema = require("../assetSource");

describe("assetSource", () => {
  let ajv;
  let data;
  let valid;

  describe("when success", () => {
    describe("when only required fields", () => {
      beforeAll(() => {
        data = {
          uri: "http://localhost:3000/my-asset"
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
          uri: "http://localhost:3000/my-asset",
          key: "key",
          dimensions: {
            w: 640,
            h: 480
          },
          contentType: "image/jpeg"
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
    describe("when missing uri property", () => {
      beforeAll(() => {
        data = {
          key: "key",
          dimensions: {
            w: 640,
            h: 480
          },
          contentType: "image/jpeg"
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
