const crypto = require("crypto")

const create = (
        companyName, 
        jobTitle, 
        status, 
        location, 
        salary, 
        applicationLink, 
        dateApplied, 
        dateResponse, 
        lastUpdated,
        notes,) =>{
    const newObject = {
        id: crypto.randomUUID(),
        companyName, 
        jobTitle, 
        status, 
        location, 
        salary, 
        applicationLink, 
        dateApplied, 
        dateResponse, 
        lastUpdated,
        notes,

    }
    return newObject
}


module.exports = create