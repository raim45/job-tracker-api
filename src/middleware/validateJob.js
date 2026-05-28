const validate = (req, res, next) => {
    const job = req.body
    if(!job.companyName || !job.jobTitle || !job.status || job.dateApplied){
        return res.status(400).json({success: false, msg: "incomplete data"})
    }
    next()
}

module.exports = validate