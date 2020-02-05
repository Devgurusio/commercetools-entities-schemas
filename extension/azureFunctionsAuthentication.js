module.exports = {
  type: "object",
  description: "Azure Functions Authentication",
  properties: {
    type: {
      type: "string",
      enum: ["AzureFunctions"]
    },
    key: {
      type: "string",
      description: `Partially hidden on retrieval.
        See the Azure Functions documentation. To protect your Azure Function, set its authLevel to function and provide the functions key here. The commercetools platform will set the x-functions-key header.
        To protect the secret key from being exposed, please remove the code parameter and the secret key from the url, e.g. do not use:
        https://foo.azurewebsites.net/api/bar?code=secret
        url, but only:
        https://foo.azurewebsites.net/api/bar`
    }
  },
  required: ["type", "key"]
};
