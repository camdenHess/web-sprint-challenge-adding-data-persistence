// build your `Resource` model here
const db = require('../../data/dbConfig')

async function getResources() {
    const resourceRows = await db('resources as r')
    return resourceRows
}

function postResource(resource) {
    return db('resources').insert(resource)
        .then(async ([resource_id]) => {
            let returnedResource = await db('resources').where('resource_id', resource_id).first()
            return returnedResource
        })
}

module.exports = {
    getResources,
    postResource
}