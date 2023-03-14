const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const schema = require('../destination');

describe('destination', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when httpDestination', () => {
      beforeAll(() => {
        data = {
          type: 'HTTP',
          url: 'http://localhost'
        };
        ajv = new Ajv();
        addFormats(ajv);
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should be valid', () => {
        expect(valid).toBeTruthy();
      });
    });

    describe('when awsLambdaDestination', () => {
      beforeAll(() => {
        data = {
          type: 'HTTP',
          arn: 'arn:aws:lambda:region:accountid:function:functionName',
          accessKey: 'accessKey',
          accessSecret: 'accessSecret'
        };
        ajv = new Ajv();
        addFormats(ajv);
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should be valid', () => {
        expect(valid).toBeTruthy();
      });
    });
  });

  describe('when error', () => {
    describe('when is not oneOf [httpDestination, awsLambdaDestination]', () => {
      beforeAll(() => {
        data = {
          type: 'invalidType',
          url: 'http://localhost',
          arn: 'arn:aws:lambda:region:accountid:function:functionName',
          accessKey: 'accessKey',
          accessSecret: 'accessSecret'
        };
        ajv = new Ajv();
        addFormats(ajv);
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
