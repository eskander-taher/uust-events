const User = require("../models/userModel");
const Event = require("../models/eventModel");

async function getAttendedEvents(req, res) {
  try {
    const userId = req.user.userId;

    // Find the user in the database
    const user = await User.findById(userId);

    // Populate the attendedEvents field with the event documents
    await user.populate("attendedEvents").execPopulate();

    // Return the attended events to the client
    return res.status(200).send(user.attendedEvents);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
}

async function getOrganizedEvents(req, res) {
  try {
    const userId = req.user.userId;

    // Find the user's events in the database
    const events = await Event.find({ organizer: userId });

    // Return the organized events to the client
    return res.status(200).send(events);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
}

module.exports = {
  getAttendedEvents,
  getOrganizedEvents,
};