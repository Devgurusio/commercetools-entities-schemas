module.exports = {
  type: "object",
  properties: {
    averageRating: {
      type: "number",
      description: `Average rating of one target
        This number is rounded with 5 decimals.`
    },
    highestRating: {
      type: "number",
      description: "Highest rating of one target"
    },
    lowestRating: {
      type: "number",
      description: "Lowest rating of one target"
    },
    count: {
      type: "number",
      description: "Number of ratings taken into account"
    },
    ratingsDistribution: {
      type: "object",
      description: `The full distribution of the ratings.
        The keys are the different ratings and the values are the count of reviews having this rating. Only the used ratings appear in this object.`,
      patternProperties: {
        "^.+$": {
          type: "number",
          description: "Count of reviews having this rating"
        }
      }
    }
  }
};
