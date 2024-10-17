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

router.post('/', (req, res, next) => {
    const resource = req.body
    Resource.postResource(resource)
        .then(resour => {
            res.status(201).json(resour)
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