const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const participationSchema = new Schema({
  event_id: {
    type: Schema.Types.ObjectId,
    ref: "Event",
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  paid: {
    type: Boolean,
    default: false,
  },
});

const Participation = mongoose.model("Participation", participationSchema);

module.exports = Participation;
