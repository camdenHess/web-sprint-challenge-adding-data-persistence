// build your `Resource` model here
const db = require('../../data/dbConfig')

async function getResources() {
    const resourceRows = await db('resources as r')
    return resourceRows
}

module.exports = {
    getResources
}