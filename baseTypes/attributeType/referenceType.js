module.exports = {
  type: "object",
  properties: {
    name: { type: "string", enum: ["reference"] },
    referenceTypeId: {
      type: "string",
      description: `The name of the resource type that the value should reference. Supported values are:
        - "cart"
        - "category"
        - "channel"
        - "customer"
        - "key-value-document"
        - "order"
        - "product"
        - "product-type"
        - "review"
        - "state"
        - "shipping-method"
        - "zone"`
    }
  },
  required: ["name", "referenceTypeId"]
};
