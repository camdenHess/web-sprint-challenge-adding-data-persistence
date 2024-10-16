// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require('./model')

router.get('/', (req, res, next) => {
    Task.getTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(next)
})

router.use((err, req, res) => {
    res.status(500).json({
        customMessage: 'somethings wrong inside the tasks router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router