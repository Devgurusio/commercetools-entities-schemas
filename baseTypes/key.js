module.exports = {
  type: 'string',
  description: `User-defined unique identifier for the resource.
    Keys can only contain alphanumeric characters (a-Z, 0-9), underscores and hyphens (-, _) and be between 2 and 256 characters.`,
  pattern: '^[a-zA-Z0-9-_]+$',
  minLength: 2,
  maxLength: 256
};
