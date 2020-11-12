const productVariantAvailability = {
  type: 'object',
  properties: {
    isOnStock: { type: 'boolean' },
    restockableInDays: {
      type: 'number',
      description:
        'The number of days it takes to restock a product once it is out of stock'
    },
    availableQuantity: {
      type: 'number',
      description:
        'The number of items of this product variant that are currently available in stock isOnStock, restockableInDays and quantityOnStock are based on the Inventory Entry with no supply channel for this variant'
    }
  }
};

module.exports = {
  ...productVariantAvailability,
  properties: {
    ...productVariantAvailability.properties,
    channels: {
      type: 'object',
      description: 'Map of ProductVariantAvailability per Channel id',
      patternProperties: {
        '^.+$': {
          ...productVariantAvailability,
          description: `For each Inventory Entries with a supply channel, an entry is added into channels:
            - the key is the Channel id
            - the value is an object containing the data isOnStock, restockableInDays and availableQuantity for the Inventory Entry with the supply channel for this variant.`
        }
      }
    }
  }
};
