const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const app = express()
const jobs = require("./routes/jobs")
const errors = require("./middleware/errorHandler")

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use("/api/jobs", jobs)
app.use(errors)


module.exports = app