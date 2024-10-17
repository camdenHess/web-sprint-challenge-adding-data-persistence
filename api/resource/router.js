// build your `/api/resources` router here
const router = require('express').Router()
const Resource = require('./model')

router.get('/', (req, res, next) => {
    Resource.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(next)
})

router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'somethings wrong inside the resource router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router