const db = require("../config/db");

const getAllBookings = async () => {
    return await db.sqlQuery(`SELECT booking_id AS bookingId, user_id AS userId, van_id AS vanId, org_id AS orgId, start_date AS startDate, end_date AS endDate, price_total AS priceTotal, status FROM bookings`);
};

const getAllBookingsReviews = async () => {
    return await db.sqlQuery(`SELECT review_id AS reviewId, booking_id AS bookingId, rating, comment, van_id AS vanId FROM booking_reviews`);
};

const createNewBooking = async (newB) => {
    return await db.sqlQuery(`INSERT INTO bookings (user_id, van_id, org_id, start_date, end_date, price_total, status) VALUES (?, ?, ?, ?, ?, ?, ?) `, [newB.userId, newB.vanId, newB.orgId, newB.startDate, newB.endDate, newB.priceTotal, newB.status]);
}

const findBookingById = async (id) => {
    return await db.sqlQuery(`SELECT booking_id AS bookingId, user_id AS userId, van_id AS vanId, org_id AS orgId, start_date AS startDate, end_date AS endDate, price_total AS priceTotal, status FROM bookings WHERE booking_id = ?`, [id]);
};

const createReview = async (newR) => {
    return await db.sqlQuery(`INSERT INTO booking_reviews (booking_id, rating, comment, van_id) VALUES (?, ?, ?, ?) `, [null, newR.stars, newR.review, newR.vanId]);
}

const findReviewById = async (id) => {
    return await db.sqlQuery(`SELECT review_id AS reviewId, booking_id AS bookingId, rating, comment, van_id AS vanId FROM booking_reviews WHERE review_id = ?`, [id]);
};

const updateOneBooking = async (booking) => {
    return await db.sqlQuery(`UPDATE bookings SET start_date = ?, end_date = ?, price_total = ?, status = ? WHERE booking_id = ?`, [new Date(booking.startDate), new Date(booking.endDate), booking.priceTotal, booking.status, booking.bookingId]);
}

const deleteOneBooking = async (id) => {
    return await db.sqlQuery('DELETE FROM bookings WHERE booking_id = ?', id);
}

module.exports = {
    getAllBookings,
    getAllBookingsReviews,
    createNewBooking,
    createReview,
    findReviewById,
    findBookingById,
    updateOneBooking,
    deleteOneBooking,
}