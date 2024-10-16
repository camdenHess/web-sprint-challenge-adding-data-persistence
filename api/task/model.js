// build your `Task` model here
const db = require('../../data/dbConfig')

async function getTasks() {
    const taskRows = await db('tasks as t')
        .leftJoin('projects as p', 't.project_id', 'p.project_id')
        .select(
            't.task_id',
            't.task_description',
            't.task_notes',
            't.task_completed',
            'p.project_name',
            'p.project_description'
        )
    const updatedTasks = []
    taskRows.forEach(task => {
        let bool = false
        if(task.task_completed) {
            bool = true
        }
        const newTask = {
            task_id: task.task_id,
            task_description: task.task_description,
            task_notes: task.task_notes,
            task_completed: bool,
            project_name: task.project_name,
            project_description: task.project_description
        }
        updatedTasks.push(newTask)
    })
    return updatedTasks
}

module.exports = {
    getTasks
}