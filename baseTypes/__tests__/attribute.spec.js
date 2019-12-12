const Ajv = require("ajv");
const schema = require("../attribute");

describe("attribute", () => {
  let ajv;
  let data;
  let valid;

  describe("when success", () => {
    describe("when string value", () => {
      beforeAll(() => {
        data = {
          name: "attributeName",
          value: "string"
        };
      });

      beforeAll(() => {
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should be valid", () => {
        expect(valid).toBeTruthy();
      });
    });

    describe("when number value", () => {
      beforeAll(() => {
        data = {
          name: "attributeName",
          value: 13
        };
      });

      beforeAll(() => {
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should be valid", () => {
        expect(valid).toBeTruthy();
      });
    });

    describe("when object value", () => {
      beforeAll(() => {
        data = {
          name: "attributeName",
          value: { key: "value" }
        };
      });

      beforeAll(() => {
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should be valid", () => {
        expect(valid).toBeTruthy();
      });
    });

    describe("when array value", () => {
      beforeAll(() => {
        data = {
          name: "attributeName",
          value: [{ key: "value" }]
        };
      });

      beforeAll(() => {
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should be valid", () => {
        expect(valid).toBeTruthy();
      });
    });

    describe("when boolean value", () => {
      beforeAll(() => {
        data = {
          name: "attributeName",
          value: true
        };
      });

      beforeAll(() => {
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
          value: true
        };
      });

      beforeAll(() => {
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should not be valid", () => {
        expect(valid).toBeFalsy();
      });
    });

    describe("when missing value property", () => {
      beforeAll(() => {
        data = {
          name: "attributeName"
        };
      });

      beforeAll(() => {
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
