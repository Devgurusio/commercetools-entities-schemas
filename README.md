# commercetools entities schemas

Reusable commercetools entities schemas definitions

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
