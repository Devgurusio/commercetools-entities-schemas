module.exports = {
  type: "object",
  description: "Authorization Header",
  properties: {
    type: {
      type: "string",
      enum: ["AuthorizationHeader"]
    },
    headerValue: {
      type: "string",
      description: `The Authorization header will be set to the content of headerValue. The authentication scheme (e.g. Basic or Bearer) should be included in the headerValue.
        As an example for Basic Authentication, the headerValue should be set to Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==`
    }
  },
  required: ["type", "headerValue"]
};
