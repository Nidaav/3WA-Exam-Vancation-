const express = require("express");
const app = express();
const cors = require('cors')
const bodyParser = require("body-parser")
const flash = require('express-flash')
const session = require('express-session')
const userRouter = require("./routes/user")
const vanRouter = require("./routes/van");
const orgRouter = require("./routes/org");
const bookingRouter = require("./routes/booking");
const passport = require('passport');

app.use(cors());
app.use(bodyParser.json())
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

// ROUTER
app.use("/users", userRouter)
app.use("/vans", vanRouter)
app.use("/orgs", orgRouter)
app.use("/bookings", bookingRouter)

console.log(`
New refresh : `);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});