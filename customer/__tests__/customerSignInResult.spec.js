const Ajv = require("ajv");
const schema = require("../customerSignInResult");

describe("customerSignInResult", () => {
  let ajv;
  let data;
  let valid;

  describe("when success", () => {
    describe("when only required fields", () => {
      beforeAll(() => {
        data = {
          customer: {
            id: "74d32d79-aa32-44c8-8f2e-74132890310b",
            version: 3,
            lastMessageSequenceNumber: 1,
            createdAt: "2017-09-20T11:32:32.727Z",
            lastModifiedAt: "2017-09-28T10:43:18.863Z",
            customerNumber: "12345",
            email: "user@domain.io",
            key: "key",
            password: "password",
            stores: [
              {
                typeId: "store",
                id: "74d32d79-aa32-44c8-8f2e-74132890310b"
              }
            ],
            firstName: "firstName",
            lastName: "lastName",
            middleName: "middleName",
            title: "Dr.",
            salutation: "Mr.",
            anonymousCartId: "74d32d79-aa32-44c8-8f2e-74132890310b",
            anonymousId: "74d32d79-aa32-44c8-8f2e-74132890310b",
            externalId: "externalId",
            dateOfBirth: "1983-08-17",
            companyName: "companyName",
            vatId: "vatId",
            isEmailVerified: false,
            customerGroup: {
              typeId: "customer-group",
              id: "74d32d79-aa32-44c8-8f2e-74132890310b"
            },
            addresses: [
              {
                id: "_NuouyCq",
                key: "my-address",
                title: "Baron",
                salutation: "Mr.",
                firstName: "Sherlok",
                lastName: "Holmes",
                streetName: "Baker St.",
                streetNumber: "221B",
                additionalStreetInfo: "additionalStreetInfo",
                postalCode: "10012",
                city: "London",
                region: "region",
                state: "state",
                country: "UK",
                company: "company",
                department: "department",
                building: "building",
                apartment: "apartment",
                pOBox: "pOBox",
                phone: "phone",
                email: "email",
                fax: "fax",
                additionalAddressInfo: "additionalAddressInfo",
                externalId: "externalId"
              }
            ],
            defaultBillingAddressId: "_NuouyCq",
            billingAddressIds: ["_NuouyCq"],
            defaultShippingAddressId: "_NuouyCq",
            shippingAddressIds: ["_NuouyCq"],
            custom: {
              type: {
                typeId: "customer",
                id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
              },
              fields: {
                description: "my description"
              }
            },
            locale: "en"
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

    describe("when all fields", () => {
      beforeAll(() => {
        data = {
          customer: {
            id: "74d32d79-aa32-44c8-8f2e-74132890310b",
            version: 3,
            lastMessageSequenceNumber: 1,
            createdAt: "2017-09-20T11:32:32.727Z",
            lastModifiedAt: "2017-09-28T10:43:18.863Z",
            customerNumber: "12345",
            email: "user@domain.io",
            key: "key",
            password: "password",
            stores: [
              {
                typeId: "store",
                id: "74d32d79-aa32-44c8-8f2e-74132890310b"
              }
            ],
            firstName: "firstName",
            lastName: "lastName",
            middleName: "middleName",
            title: "Dr.",
            salutation: "Mr.",
            anonymousCartId: "74d32d79-aa32-44c8-8f2e-74132890310b",
            anonymousId: "74d32d79-aa32-44c8-8f2e-74132890310b",
            externalId: "externalId",
            dateOfBirth: "1983-08-17",
            companyName: "companyName",
            vatId: "vatId",
            isEmailVerified: false,
            customerGroup: {
              typeId: "customer-group",
              id: "74d32d79-aa32-44c8-8f2e-74132890310b"
            },
            addresses: [
              {
                id: "_NuouyCq",
                key: "my-address",
                title: "Baron",
                salutation: "Mr.",
                firstName: "Sherlok",
                lastName: "Holmes",
                streetName: "Baker St.",
                streetNumber: "221B",
                additionalStreetInfo: "additionalStreetInfo",
                postalCode: "10012",
                city: "London",
                region: "region",
                state: "state",
                country: "UK",
                company: "company",
                department: "department",
                building: "building",
                apartment: "apartment",
                pOBox: "pOBox",
                phone: "phone",
                email: "email",
                fax: "fax",
                additionalAddressInfo: "additionalAddressInfo",
                externalId: "externalId"
              }
            ],
            defaultBillingAddressId: "_NuouyCq",
            billingAddressIds: ["_NuouyCq"],
            defaultShippingAddressId: "_NuouyCq",
            shippingAddressIds: ["_NuouyCq"],
            custom: {
              type: {
                typeId: "customer",
                id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
              },
              fields: {
                description: "my description"
              }
            },
            locale: "en"
          },
          cart: {
            // ToDo
            id: "74d32d79-aa32-44c8-8f2e-74132890310b",
            version: 3,
            lastMessageSequenceNumber: 1,
            createdAt: "2017-09-20T11:32:32.727Z",
            lastModifiedAt: "2017-09-28T10:43:18.863Z"
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
    describe("when missing customer property", () => {
      beforeAll(() => {
        data = {
          cart: {
            // ToDo
            id: "74d32d79-aa32-44c8-8f2e-74132890310b",
            version: 3,
            lastMessageSequenceNumber: 1,
            createdAt: "2017-09-20T11:32:32.727Z",
            lastModifiedAt: "2017-09-28T10:43:18.863Z"
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
