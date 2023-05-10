const express = require("express");
const router = express.Router();

const {
  getEventById,
  getEventsById,
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");

router.get("/", getEvents);
router.get("/1/:id", getEventById);
router.get("/:id", getEventsById);
router.post("/", createEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

module.exports = router;
