module.exports = {
  type: 'object',
  properties: {
    type: {
      type: 'string',
      description: 'String with value centPrecision',
      enum: ['highPrecision']
    },
    currencyCode: {
      type: 'string',
      description: 'The currency code compliant to ISO 4217'
    },
    centAmount: {
      type: 'number',
      description: `The amount in cents (the smallest indivisible unit of the currency). 
         In order to calculate the real amount, the operation is amount = (centAmount / 10^fractionDigits)
           Example: 
            EUR -> {centAmount = 100; fractionDigits = 2} => 1 EUR
            CLP -> {centAmount = 100; fractionDigits = 0} => 100 CLP`
    },
    preciseAmount: {
      type: 'number',
      description: `The amount in 1 / (10 * fractionDigits) of a currency. Here are some examples:
        | preciseAmount | fractionDigits  | result    |
        | 123456        | 3               | 123.456   |
        | 123456        | 5               | 1.23456   |
        | 123456        | 7               | 0.0123456 |`
    },
    fractionDigits: {
      type: 'number',
      description:
        'For money type it’s equal to the number of default fraction digits for a currency, can be omitted since it’s always equal to currency fraction digits'
    }
  },
  required: ['type', 'currencyCode', 'centAmount', 'fractionDigits']
};
