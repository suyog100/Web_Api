const router = require("express").Router();

const reservationController = require("../controllers/reservation");

router.post("/add", reservationController.addReservation);

module.exports = router;
