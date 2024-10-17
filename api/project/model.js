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

function postProject(project) {
    return db('projects').insert(project)
        .then(async ([project_id]) => {
            let returnedProject = await db('projects').where('project_id', project_id).first()
            let bool = false
            if (returnedProject.project_completed === 1) {
                bool = true
            }
            let updated = {
                project_id: returnedProject.project_id,
                project_name: returnedProject.project_name,
                project_description: returnedProject.project_description,
                project_completed: bool
            }
            return updated
        })
}

module.exports = {
    getProjects,
    postProject
}