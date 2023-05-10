const asyncHandler = require("express-async-handler");
const Event = require("../models/eventModel");
const Participation = require("../models/participationModel");
const mongoose = require("mongoose");

// create a participation
const createParticipation = asyncHandler(async (req, res) => {
  const event_id = req.body.event_id;
  const user_id = req.body.user_id;

  // Check if the organizer is trying to participate in their own event
  const event = await Event.findById(event_id);
  if (event.organizer_id.toString() === user_id) {
    return res
      .status(400)
      .json({ message: "Organizer cannot participate in their own event" });
  }

  // Create the participation
  const participation = new Participation({
    event_id,
    user_id,
  });

  const savedParticipation = await participation.save();
  res.status(201).json({
    id: savedParticipation._id,
    message: "User added to event successfully",
  });
});

// get all participations
const getParticipations = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No participations found!" });
  }

  const participations = await Participation.find({ event_id: id }).populate(
    "user_id"
  );
  if (!participations) {
    return res.status(404).json({ error: "No participations found!" });
  }

  res.status(200).json(participations);
});

// get participation by id
const getParticipationById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such participation!" });
  }

  const participation = await Participation.findById(id);
  if (!participation) {
    return res.status(404).json({ error: "No such participation!" });
  }

  res.status(200).json(participation);
});

// update participation
const updateParticipation = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such participation!" });
  }

  const participation = await Participation.findById(id);

  participation.paid = !participation.paid;

  const updatedParticipation = await Participation.findByIdAndUpdate(
    id,
    participation,
    { new: true }
  ).populate("user_id");
  if (!updatedParticipation) {
    return res.status(404).json({ error: "No such participation!" });
  }
  res.status(200).json(updatedParticipation);
});

// delete participation
const deleteParticipation = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such participation!" });
  }
  const deletedParticipation = await Participation.findOneAndDelete({
    _id: id,
  });
  if (!deletedParticipation) {
    return res.status(400).json({ error: "No such participation!" });
  }

  res.status(200).json({
    id: deletedParticipation._id,
    message: "participation was deleted successfully",
  });
});

module.exports = {
  createParticipation,
  getParticipations,
  updateParticipation,
  // deleteParticipation,
  // getParticipationById,
};
