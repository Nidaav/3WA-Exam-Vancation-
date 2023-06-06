const bookingService = require("../services/bookingService");

const getAllBookings = async (req, res) => {
    const allBookings = await bookingService.getAllBookings();
    res.status(200).send(allBookings);
};

const getAllBookingsReviews = async (req, res) => {
    const allBookingsReviews = await bookingService.getAllBookingsReviews();
    res.status(200).send(allBookingsReviews);
};

const createBooking = async (req, res) => {
    console.log('req:', req)
    const { body } = req;
    if (!body) {
        return;
    }

    const createdBooking = await bookingService.createBooking(body);

    res.status(201).send({ status: "OK", data: createdBooking});
};

const createReview = async (req, res) => {
    console.log('req:', req)
    const { body } = req;
    if (!body) {
        return;
    }

    const createdReview = await bookingService.createReview(body);

    res.status(201).send({ status: "OK", data: createdReview});
};


const updateOneBooking = async (req, res) => {
    const { body } = req;
    if (!body) {
        return;
    }
    const updatedBooking = await bookingService.updateOneBooking(body);    
    res.status(200).send({ status: "OK", data: updatedBooking});
};

// const getOneVan = (req, res) => {
//     const Van = bookingService.getOneVan(orgId);
//     res.send("Get an existing Van");
// };


  
const deleteOneBooking = (req, res) => {
    const id = req.params.bookingId;
    if (!id) {
        return;
    }
    bookingService.deleteOneBooking(id);
    res.send("Delete an existing Van");
};

module.exports = {
    getAllBookings,
    getAllBookingsReviews,
    createBooking,
    updateOneBooking,
    deleteOneBooking,
    createReview,
    // createVan,
    // getOneVan,
    // deleteOneVan,
};