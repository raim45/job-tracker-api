const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const app = express()
const jobs = require("./routes/jobs")

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use("/api/jobs", jobs)


module.exports = app