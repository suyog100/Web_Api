const router = require("express").Router();

const appointmentController = require("../controllers/appointment");

router.post("/add", appointmentController.addAppointment);

module.exports = router;
