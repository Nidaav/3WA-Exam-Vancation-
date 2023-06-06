const express = require("express");
const router = express.Router();

const bookingController = require("../controllers/bookingController");

router.get("/reviews", bookingController.getAllBookingsReviews);
router.post("/", bookingController.createBooking);
router.post("/reviews", bookingController.createReview);
router.patch("/:bookingId", bookingController.updateOneBooking);
router.get("/", bookingController.getAllBookings);
router.delete("/:bookingId", bookingController.deleteOneBooking);


// router.get("/:vanId", bookingController.getOneVan);



module.exports = router;