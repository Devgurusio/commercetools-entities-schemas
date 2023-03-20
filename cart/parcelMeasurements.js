module.exports = {
  type: 'object',
  description:
    'Representation of a Parcel Measurements. Information regarding the dimensions of a parcel',
  properties: {
    heightInMillimeter: {
      description: '',
      type: 'number'
    },
    lengthInMillimeter: {
      description: '',
      type: 'number'
    },
    widthInMillimeter: {
      description: '',
      type: 'number'
    },
    weightInGram: {
      description: '',
      type: 'number'
    }
  },
  required: [
    'heightInMillimeter',
    'lengthInMillimeter',
    'widthInMillimeter',
    'weightInGram'
  ]
};
