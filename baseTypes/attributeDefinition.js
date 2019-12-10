const attributeConstraint = require("./attributeConstraint");
const attributeType = require("./attributeType");
const localizedString = require("./localizedString");
const textInputHint = require("./textInputHint");

module.exports = {
  type: "object",
  description:
    "Attribute definitions describe a product attribute and allow you to define some meta-information associated with the attribute (like whether it should be searchable or its constraints)",
  properties: {
    type: {
      ...attributeType,
      description: "Describes the type of the attribute"
    },
    name: {
      type: "string",
      description: `The unique name of the attribute used in the API. The name must be between two and 256 characters long and can contain the ASCII letters A to Z in lowercase or uppercase, digits, underscores (_) and the hyphen-minus (-).
        When using the same name for an attribute in two or more product types all fields of the AttributeDefinition of this attribute need to be the same across the product types, otherwise an AttributeDefinitionAlreadyExists error code will be returned. An exception to this are the values of an enum or lenum type and sets thereof`,
      pattern: "[-a-zA-Z0-9_]{2,256}"
    },
    label: {
      ...localizedString,
      description: "A human-readable label for the attribute"
    },
    isRequired: {
      type: "boolean",
      description: "Whether the attribute is required to have a value"
    },
    attributeConstraint: {
      ...attributeConstraint,
      description:
        "Describes how an attribute or a set of attributes should be validated across all variants of a product"
    },
    inputTip: {
      ...localizedString,
      description:
        "Additional information about the attribute that aids content managers when setting product details"
    },
    inputHint: {
      ...textInputHint,
      description:
        "Provides a visual representation type for this attribute. only relevant for text-based attribute types like TextType and LocalizableTextType"
    },
    isSearchable: {
      type: "boolean",
      description:
        "Whether the attribute’s values should generally be enabled in product search. This determines whether the value is stored in products for matching terms in the context of full-text search queries and can be used in facets & filters as part of product search queries. The exact features that are enabled/disabled with this flag depend on the concrete attribute type and are described there. The max size of a searchable field is restricted to 10922 characters. This constraint is enforced at both product creation and product update. If the length of the input exceeds the maximum size an InvalidField error is returned"
    }
  },
  required: ["type", "name", "label", "isRequired"]
};
