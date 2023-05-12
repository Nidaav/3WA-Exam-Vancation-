// const bodyParser = require("body-parser");
const express = require("express");
const app = express();
// app.use(bodyParser.json());
// const { appendFile } = require("fs");
const userRouter = require("./routes/user")
const vanRouter = require("./routes/van");


app.use("/users", userRouter)
app.use("/vans", vanRouter)

console.log(`
New refresh : `);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});