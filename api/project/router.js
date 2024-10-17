// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')

router.get('/', (req, res, next) => {
    Project.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    const project = req.body
    Project.postProject(project)
        .then(proj => {
            res.status(201).json(proj)
        })
        .catch(next)
})

router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'somethings wrong inside the project router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router