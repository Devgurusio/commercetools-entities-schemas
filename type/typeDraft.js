const fieldDefinition = require('../baseTypes/fieldDefinition');
const key = require('../baseTypes/key');
const localizedString = require('../baseTypes/localizedString');

module.exports = {
  type: 'object',
  description: 'Type draft object',
  properties: {
    key,
    name: localizedString,
    description: localizedString,
    resourceTypeIds: {
      type: 'array',
      description: `The IDs of the resources that can be customized with this type
        - Asset:                        asset
        - Categories:                   category
        - Channels:                     channel
        - Customers:                    customer
        - Customer Groups:              customer-group
        - Carts:                        order (same as Orders)
        - Cart Discounts:             	cart-discount
        - DiscountCodes:               	discount-code
        - InventoryEntry:             	inventory-entry
        - Orders:                     	order
        - LineItems:      	            line-item
        - CustomLineItems:	            custom-line-item
        - ProductPrice: 	              product-price
        - Payment:        	            payment
        - Payment InterfaceInteraction: payment-interface-interaction
        - ShoppingList:                 shopping-list
        - ShoppingList TextLineItem:  	shopping-list-text-line-item
        - Reviews:                    	review`,
      items: { type: 'string' }
    },
    fieldDefinitions: {
      type: 'array',
      items: fieldDefinition
    }
  },
  required: ['key', 'name']
};
