/* eslint-disable no-unused-vars */
const address = require("../baseTypes/address");
const customFields = require("../baseTypes/customFields");
const customerDraft = require("./customerDraft");
const reference = require("../baseTypes/reference");
const resource = require("../common/resource");

const {
  billingAddresses,
  shippingAddresses,
  defaultBillingAddress,
  defaultShippingAddress,
  ...properties
} = customerDraft.properties;

module.exports = {
  ...resource,
  ...customerDraft,
  description: "Representation of a customer",
  properties: {
    ...resource.properties,
    ...properties,
    addresses: {
      type: "array",
      description: "Array of Address",
      items: address
    },
    defaultBillingAddressId: {
      type: "string",
      description: "The address ID in the addresses list"
    },
    billingAddressIds: {
      type: "array",
      description:
        "The IDs from the addresses list which are used as billing addresses",
      items: { type: "string" }
    },
    defaultShippingAddressId: {
      type: "string",
      description: "The address ID in the addresses list"
    },
    shippingAddressIds: {
      type: "array",
      description:
        "The IDs from the addresses list which are used as shipping addresses",
      items: { type: "string" }
    },
    customerGroup: reference,
    custom: customFields
  },
  required: [...resource.required, ...customerDraft.required]
};
