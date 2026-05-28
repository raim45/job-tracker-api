const crypto = require("crypto")

const create = (data) => {
    const newObject = {
        id: crypto.randomUUID(),
        companyName: data.companyName,
        jobTitle: data.jobTitle,
        status: data.status,
        location: data.location,
        salary: data.salary,
        applicationLin: data.applicationLin,
        dateApplied: data.dateApplied,
        dateResponse: data.dateResponse,
        notes: data.notes
    }
    return newObject
}
  

module.exports = create