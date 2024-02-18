db.createCollection("football_team", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["player_name", "position", "rushing_yards", "touchdowns_thrown", "sacks", "field_goals_made", "field_goals_missed", "catches"],
      properties: {
        player_name: { bsonType: "string", description: "Name of the player" },
        position: { bsonType: "string", description: "Player's position" },
        rushing_yards: { bsonType: "int", description: "Total rushing yards in the last season" },
        touchdowns_thrown: { bsonType: "int", description: "Total touchdown passes thrown" },
        sacks: { bsonType: "int", description: "Total number of sacks" },
        field_goals_made: { bsonType: "int", description: "Total field goals made" },
        field_goals_missed: { bsonType: "int", description: "Total field goals missed" },
        catches: { bsonType: "int", description: "Total catches made" }
      }
    }
  }
});