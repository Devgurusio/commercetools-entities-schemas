const key = require("../baseTypes/key");
const localizedString = require("../baseTypes/localizedString");
const reference = require("../baseTypes/reference");

module.exports = {
  type: "object",
  description: "State draft object",
  properties: {
    key,
    type: {
      type: "string",
      description: `In a StateDraft it has to be specified to which CTP resource or object the state shall belong to.
        The StateType enumeration contains values for each of the objects that can have states assigned:
        - OrderState: Used by Orders
        - LineItemState: Used by LineItems and CustomLineItems in Carts and Orders
        - ProductState: Used by Products
        - ReviewState: Used by Reviews
        - PaymentState: Used by paymentStatus in Payments`,
      enum: [
        "OrderState",
        "LineItemState",
        "ProductState",
        "ReviewState",
        "PaymentState"
      ]
    },
    name: {
      ...localizedString,
      description: "A human-readable name of the state"
    },
    description: {
      ...localizedString,
      description: "A human-readable description of the state"
    },
    initial: {
      type: "boolean",
      description:
        "A state can be declared as an initial state for any state machine. When a workflow starts, this first state must be an initial state"
    },
    roles: {
      type: "array",
      items: {
        type: "string",
        description: `Values of the StateRole enumeration:
          - ReviewIncludedInStatistics: Used by Reviews.
            This role only applies for the ReviewState StateType. When the state of a Review has this role, the review will be taken into account for rating statistics.
          - Return: Used by Orders in the update action transitionLineItemState.
            This role only applies for the LineItemState StateType.`,
        enum: ["ReviewIncludedInStatistics", "Return"]
      }
    },
    transitions: {
      type: "array",
      description: `Array of Reference to State
        Transitions are a way to describe possible transformations of the current state to other states of the same type (e.g.: Initial -> Shipped). When performing a transitionState update action and transitions is set, the currently referenced state must have a transition to the new state.
        If transitions is an empty list, it means the current state is a final state and no further transitions are allowed.
        If transitions is not set, the validation is turned off. When performing a transitionState update action, any other state of the same type can be transitioned to`,
      items: reference
    }
  },
  required: ["key", "type"]
};
