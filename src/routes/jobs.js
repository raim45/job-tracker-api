const express = require("express")
const router = express.Router()
const validate = require("../middleware/validateJob")
const calls = require("../controllers/jobsController")
    
router.get("/", calls.getJobs)
router.get("/analysis", calls.analysis)
router.get("/:id", calls.getJobsById)
router.post("/", validate, calls.createJob)
router.patch("/:id", calls.updateJob)
router.delete("/:id", calls.deleteJob)


module.exports = router
