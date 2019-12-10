module.exports = {
  type: "object",
  description:
    "The nested attribute type allows you to nest attributes based on some existing product type. It does not support isSearchable nor it is supported in queries at the moment. The only supported AttributeConstraint is None",
  properties: {
    name: { type: "string", enum: ["nested"] },
    typeReference: {
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
  required: ["name", "typeReference"]
};
