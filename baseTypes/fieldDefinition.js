const fieldType = require("./fieldType");
const localizedString = require("./localizedString");
const textInputHint = require("./textInputHint");

module.exports = {
  type: "object",
  description:
    "Field definitions describe custom fields and allow you to define some meta-information associated with the field",
  properties: {
    type: fieldType,
    name: {
      type: "string",
      description: `The name of the field.
        The name must be between two and 36 characters long and can contain the ASCII letters A to Z in lowercase or uppercase, digits, underscores (_) and the hyphen-minus (-).
        The name must be unique for a given resource type ID. In case there is a field with the same name in another type it has to have the same FieldType also`,
      pattern: "^[a-zA-Z0-9-_]+$",
      minLength: 2,
      maxLength: 36
    },
    label: {
      ...localizedString,
      description: "A human-readable label for the field"
    },
    required: {
      type: "boolean",
      description: "Whether the field is required to have a value"
    },
    inputHint: {
      ...textInputHint,
      description:
        "Provides a visual representation type for this field. It is only relevant for string-based field types like StringType and LocalizedStringType"
    }
  },
  required: ["type", "name", "label"]
};
