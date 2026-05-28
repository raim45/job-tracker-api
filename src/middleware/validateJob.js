const validate = (req, res, next) => {
    const job = req.body
    if(!job.companyName || !job.jobTitle || !job.status || !job.dateApplied){
        return res.status(400).json({success: false, msg: "incomplete data"})
    }

    const validStatuses = ["applied", "interview", "rejected", "offer"]
    if (!validStatuses.includes(job.status)) {
        return res.status(400).json({success: false, msg: "invalid status"})
    }
    next()
}

module.exports = validate