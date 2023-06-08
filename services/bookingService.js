const bookingRepo = require("../repositories/bookingRepository");

const getAllBookings = async () => {
  const res = await bookingRepo.getAllBookings();
  return res
};

const getAllBookingsReviews = async () => {
  const res = await bookingRepo.getAllBookingsReviews();
  return res
};

const createBooking = async (newBooking) => {
  const createB = await bookingRepo.createNewBooking(newBooking);
  const createdB = await bookingRepo.findBookingById(createB.insertId);
  console.log('createdB:', createdB)
  return createdB[0];
};

const createReview = async (newBooking) => {
  const createR = await bookingRepo.createReview(newBooking);
  const createdR = await bookingRepo.findReviewById(createR.insertId);
  console.log('createdR:', createdR)
  return createdR[0];
};

const updateOneBooking = async (body) => {
  const updateB = await bookingRepo.updateOneBooking(body);
  const updatedB = await bookingRepo.findBookingById(body.bookingId);

  return updatedB[0];
};

const deleteOneBooking = async (id) => {
  const deleteB = await bookingRepo.deleteOneBooking(id)
  return;
};

module.exports = {
  getAllBookings,
  getAllBookingsReviews,
  createBooking,
  createReview,
  updateOneBooking,
  deleteOneBooking,
};