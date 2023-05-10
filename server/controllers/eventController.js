const asyncHandler = require("express-async-handler");
const Event = require("../models/eventModel");
const mongoose = require("mongoose");

// get all events
const getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find();
  res.status(200).json(events);
});

// get an event by id
const getEventById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such event!" });
  }

  const event = await Event.findById(id).populate("organizer_id");
  if (!event) {
    return res.status(404).json({ error: "No such event!" });
  }

  res.status(200).json(event);
});

// get events by id
const getEventsById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No events found!" });
  }

  const events = await Event.find({ organizer_id: id });
  if (!events) {
    return res.status(404).json({ error: "No events found!" });
  }

  res.status(200).json(events);
});

// create an event
const createEvent = asyncHandler(async (req, res) => {
  const event = new Event({
    organizer_id: req.body.organizer_id,
    name: req.body.name,
    location: req.body.location,
    fees: req.body.fees,
    seats: req.body.seats,
    date: req.body.date,
    description: req.body.description,
  });

  const savedEvent = await event.save();
  res.status(201).json(savedEvent);
});

// update event
const updateEvent = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such event!" });
  }

  const event = {
    name: req.body.name,
  };

  const updatedEvent = await Event.findByIdAndUpdate(id, event, { new: true });
  if (!updatedEvent) {
    return res.status(404).json({ error: "No such event!" });
  }
  res.status(200).json(updatedEvent);
});

// delete event
const deleteEvent = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such event!" });
  }
  const deletedEvent = await Event.findOneAndDelete({ _id: id });
  if (!deletedEvent) {
    return res.status(400).json({ error: "No such event!" });
  }

  res
    .status(200)
    .json({ id: deletedEvent._id, message: "event was deleted successfully" });
});

module.exports = {
  getEventById,
  getEventsById,
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
