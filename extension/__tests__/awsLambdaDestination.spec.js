const Ajv = require('ajv');
const schema = require('../awsLambdaDestination');

describe('awsLambdaDestination', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    beforeAll(() => {
      data = {
        type: 'HTTP',
        arn: 'arn:aws:lambda:region:accountid:function:functionName',
        accessKey: 'accessKey',
        accessSecret: 'accessSecret'
      };
      ajv = Ajv();
    });

    beforeEach(() => {
      valid = ajv.validate(schema, data);
    });

    test('should be valid', () => {
      expect(valid).toBeTruthy();
    });
  });

  describe('when error', () => {
    describe('when missing type property', () => {
      beforeAll(() => {
        data = {
          arn: 'arn:aws:lambda:region:accountid:function:functionName',
          accessKey: 'accessKey',
          accessSecret: 'accessSecret'
        };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should not be valid', () => {
        expect(valid).toBeFalsy();
      });
    });

    describe('when missing arn', () => {
      beforeAll(() => {
        data = {
          type: 'HTTP',
          accessKey: 'accessKey',
          accessSecret: 'accessSecret'
        };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should not be valid', () => {
        expect(valid).toBeFalsy();
      });
    });

    describe('when missing accessKey', () => {
      beforeAll(() => {
        data = {
          type: 'HTTP',
          arn: 'arn:aws:lambda:region:accountid:function:functionName',
          accessSecret: 'accessSecret'
        };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should not be valid', () => {
        expect(valid).toBeFalsy();
      });
    });

    describe('when missing accessSecret', () => {
      beforeAll(() => {
        data = {
          type: 'HTTP',
          arn: 'arn:aws:lambda:region:accountid:function:functionName',
          accessKey: 'accessKey'
        };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should not be valid', () => {
        expect(valid).toBeFalsy();
      });
    });

    describe('when type is not valid', () => {
      beforeAll(() => {
        data = {
          type: 'invalidType',
          arn: 'arn:aws:lambda:region:accountid:function:functionName',
          accessKey: 'accessKey',
          accessSecret: 'accessSecret'
        };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should not be valid', () => {
        expect(valid).toBeFalsy();
      });
    });
  });
});
