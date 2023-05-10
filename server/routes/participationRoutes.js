const express = require("express");
const router = express.Router();

const {
  createParticipation,
  getParticipations,
  updateParticipation,
  // getParticipationById,
  // deleteParticipation,
} = require("../controllers/participationController");

router.post("/", createParticipation);
router.get("/:id", getParticipations);
router.put("/:id", updateParticipation);
// router.get("/:id", getParticipationById);
// router.delete("/:id", deleteParticipation);

module.exports = router;
