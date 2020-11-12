const assetDraft = require('../baseTypes/assetDraft');
const customFieldsDraft = require('../baseTypes/customFieldsDraft');
const key = require('../baseTypes/key');
const localizedString = require('../baseTypes/localizedString');
const resourceIdentifier = require('../baseTypes/resourceIdentifier');
const slug = require('../baseTypes/slug');

module.exports = {
  type: 'object',
  description: 'Category draft object',
  properties: {
    key: {
      ...key,
      description: `User-defined unique identifier for the category.
        Keys can only contain alphanumeric characters (a-Z, 0-9), underscores and hyphens (-, _) and be between 2 and 256 characters.`
    },
    name: localizedString,
    description: localizedString,
    parent: {
      ...resourceIdentifier,
      description: `A category that is the parent of this category in the category tree.
        The parent can be set by its ID or by its key`
    },
    slug: {
      ...slug,
      description: `A localized string. Entries with the format 'language[-country]: string'.
        Must match the pattern [-a-zA-Z0-9_]{2,256} human-readable identifiers usually used as deep-link URL to the related category. Each slug is unique across a project, but a category can have the same slug for different languages`
    },
    orderHint: {
      type: 'string',
      description: `An attribute as base for a custom category order in one level.
        A random value will be assigned by API if not set`
    },
    externalId: { type: 'string' },
    metaTitle: localizedString,
    metaDescription: localizedString,
    metaKeywords: localizedString,
    custom: customFieldsDraft,
    assets: {
      type: 'array',
      description: 'Array of AssetDraft',
      items: assetDraft
    }
  },
  required: ['name', 'slug']
};
