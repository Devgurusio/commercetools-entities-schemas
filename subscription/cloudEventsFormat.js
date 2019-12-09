module.exports = {
  type: "object",
  description: `CloudEvents is a specification for describing event data in a common way. CloudEvents seeks to ease event declaration and delivery across services, platforms and beyond. It is hosted by the Cloud Native Computing Foundation.
    CloudEvents is a new effort and it’s still under active development. The format is versioned, and we do not plan to offer long-term support for outdated versions yet. Therefore, CloudEvents is currently only offered in Preview, with the goal to give feedback to the CloudEvents working group.
    The CloudEvents format can be used with any Destination, and the payload delivered in the JSON Event Format. Azure Event Grid offers native support to filter and route CloudEvents`,
  properties: {
    type: {
      type: "string",
      enum: "CloudEvents"
    },
    cloudEventsVersion: { type: "string" }
  },
  required: ["type", "cloudEventsVersion"]
};
