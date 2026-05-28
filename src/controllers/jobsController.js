const create = require("../models/jobs")
const jobs = []

const getJobs = (req, res) =>{
    res.status(200).json({success: true, data: jobs})

}

const getJobsById = (req, res) =>{
    const { id } = req.params
    const singleJob = jobs.find(job => job.id === id)
    if(!singleJob){
       return res.status(404).json({ success: false, msg: `no job with id ${id}` })
    }
    
    return res.status(200).json({success: true, job: singleJob})
}

const createJob = (req, res) =>{
    const data = req.body
    const newField = create(data)
    jobs.push(newField)
    return res.status(201).json({success: true, id: newField.id})
}

const updateJob = (req, res) =>{
    const {id} = req.params
    const updates = req.body
    const singleJob = jobs.find(job => job.id === id)
    if(!singleJob){
       return res.status(404).json({ success: false, msg: `no job with id ${id}` })
    }
    const final = Object.assign(singleJob, updates)
    return res.status(200).json({success: true, job: singleJob})
}

const deleteJob = (req, res)=>{
    const {id} = req.params
    const singleJob = jobs.find(job => job.id === id)
    if (!singleJob) {
        return res.status(404).json({ success: false, msg: `no person with id ${id}`})
  }
  const job = jobs.filter(job=> job.id !== id)
  const index = jobs.indexOf(singleJob)
  jobs.splice(index, 1)


  return res.status(200).json({ success: true })

}

const analysis =(req, res)=>{
    const totalApplications = jobs.length
    if(totalApplications < 1){
        return res.status(200).json({success: true, msg: "no applications yet"})
    }
    const totalResponses = jobs.filter(job => job.dateResponse !== null)
    const responseRate = (totalResponses.length / totalApplications) * 100 + "%"

    let intervals = 0
    totalResponses.forEach(job => {
        const before = new Date(job.dateApplied)
        const after = new Date(job.dateResponse)

        intervals += (after - before) / (1000 * 60 * 60 * 24)
       
    });
    const avgResponse = intervals / totalResponses.length


    

    res.status(200).json({success: true, responseRate: responseRate, avgResponseTime: avgResponse + "days"})
}

module.exports= {
    getJobs, 
    getJobsById,
    createJob, 
    updateJob,
    deleteJob,
    analysis,
}