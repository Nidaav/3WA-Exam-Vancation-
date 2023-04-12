const bodyParser = require("body-parser");
const app = require("express")();
app.use(bodyParser.json());
const { appendFile } = require("fs");
const sensorRouter = require("./routes/sensor")
const organisationRouter = require("./routes/organisation");
// const { getAllOrganisations } = require('./services/organisationService');

app.use("/sensors", sensorRouter)
app.use("/organisations", organisationRouter)

console.log(`
New refresh : `);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});