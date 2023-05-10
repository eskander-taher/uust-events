const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  organizer_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  fees: {
    type: String,
    required: true,
  },
  seats: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
