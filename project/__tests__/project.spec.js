const Ajv = require("ajv");
const schema = require("../project");

describe("project", () => {
  let ajv;
  let valid;

  describe("when success", () => {
    let data;

    beforeAll(() => {
      data = {
        key: "stylex-test",
        name: "customizer-test",
        countries: ["ES", "US"],
        currencies: ["EUR", "USD", "CAD", "ARS"],
        languages: ["en"],
        createdAt: "2017-09-19T17:41:52.494Z",
        messages: {
          enabled: true
        },
        version: 21
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
