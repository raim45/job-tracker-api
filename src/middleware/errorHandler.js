const errors = (err, req, res, next) => {
    res.status(500).json({msg: err.message})
}

module.exports = errors