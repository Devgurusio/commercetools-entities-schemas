# commercetools entities schemas

Reusable commercetools entities schemas definitions

## Docs

-   ##### baseTypes
-   address
-   addressDraft
-   asset
-   assetSource
-   attribute
-   baseMoney
-   createdBy
-   customFields
-   dateTime
-   image
-   lastModifiedBy
-   priceDraft
-   reference
-   resourceIdentifier
-   geoJSONGeometry
-   localizedString
-   money
-   reviewRatingStatistics
-   assetDraft
-   customFieldsDraft
-   date
-   key
-   price
-   slug
-   ##### general purpose
-   message
-   pagedQueryResult
-   ##### categories
-   category
-   categoryDraft
-   ##### channel
-   channel
-   channelDraft
-   ##### customer
-   customer
-   customerDraft
-   customerSignInResult
-   customerToken
-   ##### customerGroup
-   customerGroup
-   customerGroupDraft
-   ##### httpApi
-   pagedQueryResult
-   searchParams
-   ##### store
-   store
-   storeDraft
-   ##### taxCategory
-   subRate
-   taxCategory
-   taxCategoryDraft
-   taxRate
-   taxRateDraft
-   ##### discount
-   discountCode
-   ##### cart
-   cart
-   lineItem
-   ##### order
-   order
-   orderFromCartDraft
-   ##### shippingMethod
-   shippingMethod


<a name="install"></a>

## Install

```console
npm i commercetools-entities-schemas --save
```

<a name="usage"></a>

## Usage

After adding it to your project just require the desired schemas.

You can require the specific schema you need:

```javascript
const address = require("commercetools-entities-schemas/baseTypes/address");
```

You can also require by group: 

```javascript
const { address } = require("commercetools-entities-schemas/baseTypes");
```

Or get everything at once:

```javascript
const schemas = require("commercetools-entities-schemas");

const address = schemas.baseTypes.address
```
