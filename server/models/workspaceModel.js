const moongoose = require("mongoose");

const Schema = moongoose.Schema;

const workspaceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = moongoose.model("Workspace", workspaceSchema);
