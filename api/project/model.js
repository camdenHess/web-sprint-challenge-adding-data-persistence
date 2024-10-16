// build your `Project` model here
const db = require('../../data/dbConfig')

async function getProjects() {
    const projectRows = await db('projects as p')
    const updatedProjects = []
    projectRows.forEach(proj => {
        let bool = false
        if (proj.project_completed) {
            bool = true
        }
        const newProj = {
            project_id: proj.project_id,
            project_name: proj.project_name,
            project_description: proj.project_description,
            project_completed: bool
        }
        updatedProjects.push(newProj)
    })
    return updatedProjects
}



module.exports = {
    getProjects
}