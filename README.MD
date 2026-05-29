# Job Tracker API

A REST API to track job applications, statuses, and calculate response analytics. Built with Node.js and Express.

---

## Getting Started

### Prerequisites
- Node.js
- npm

### Installation

```bash
git clone https://github.com/raim45/job-tracker-api.git
cd job-tracker-api
npm install
node server.js
```

Server runs on `http://localhost:3000`

---

## Project Structure

```
job-tracker-api/
├── src/
│   ├── controllers/
│   │   └── jobsController.js
│   ├── middleware/
│   │   ├── errorHandler.js
│   │   └── validateJob.js
│   ├── models/
│   │   └── jobs.js
│   ├── routes/
│   │   └── jobs.js
│   └── app.js
└── server.js
```

---

## API Endpoints

### Get All Jobs
```
GET /api/jobs
```
**Response**
```json
{
  "success": true,
  "data": []
}
```

---

### Get Job by ID
```
GET /api/jobs/:id
```
**Response**
```json
{
  "success": true,
  "job": {}
}
```

---

### Create Job
```
POST /api/jobs
```
**Required fields:** `companyName`, `jobTitle`, `status`, `dateApplied`

**Valid status values:** `applied`, `interview`, `rejected`, `offer`

**Request Body**
```json
{
  "companyName": "Google",
  "jobTitle": "Junior Backend Developer",
  "status": "applied",
  "location": "Remote",
  "salary": 50000,
  "applicationLink": "https://careers.google.com",
  "dateApplied": "2024-01-15",
  "dateResponse": null,
  "notes": "Dream job"
}
```
**Response**
```json
{
  "success": true,
  "id": "generated-uuid"
}
```

---

### Update Job
```
PATCH /api/jobs/:id
```
Send only the fields you want to update.

**Request Body**
```json
{
  "status": "interview"
}
```
**Response**
```json
{
  "success": true,
  "job": {}
}
```

---

### Delete Job
```
DELETE /api/jobs/:id
```
**Response**
```json
{
  "success": true
}
```

---

### Analytics
```
GET /api/jobs/analysis
```
Returns response rate and average time to hear back.

**Response**
```json
{
  "success": true,
  "responseRate": "50%",
  "avgResponseTime": "10days"
}
```

---

## Data Model

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | auto | UUID generated on creation |
| companyName | string | yes | Name of the company |
| jobTitle | string | yes | Role you applied for |
| status | string | yes | `applied`, `interview`, `rejected`, `offer` |
| location | string | no | Remote, Hybrid, On-site |
| salary | number | no | Expected salary |
| applicationLink | string | no | Link to the job posting |
| dateApplied | string | yes | Date you applied (YYYY-MM-DD) |
| dateResponse | string | no | Date they responded (YYYY-MM-DD) |
| notes | string | no | Any notes about the application |

---

## Note
Data is stored in memory — all data is lost on server restart. Database support coming in a future version.