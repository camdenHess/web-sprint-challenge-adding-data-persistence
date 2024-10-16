// build your `/api/projects` router here
const router = require('express').Router()
// const Project = require('./recipes-model')



router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'somethings wrong inside the project router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router