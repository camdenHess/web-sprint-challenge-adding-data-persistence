const projects = [
    {project_name: 'Take Out Trash', project_description: "remove trash bags when full", project_completed: false},
    {project_name: 'Clean the Bathroom', project_description: "disinfect toilet, sink, and tub", project_completed: false},
    {project_name: 'Wash the Dishes', project_description: "clean the dishes in the sink", project_completed: false}
]

const resources = [
    {resource_name: 'Shoes', resource_description: "to protect feet when outside"},
    {resource_name: 'Trash Bag', resource_description: "plastic bag"},
    {resource_name: 'Gloves', resource_description: "nylon gloves to keep hands clean"},
    {resource_name: 'Sponge', resource_description: "to help apply cleaner"},
    {resource_name: 'Disinfecting Cleaner', resource_description: "chemicals to kill bacteria"},
    {resource_name: 'Dish Soap', resource_description: "soap to take out germs"},
]

const tasks = [
    // Take Out Trash
    {task_description: 'Put on shoes', task_notes: 'make sure they are weather appropriate', task_completed: false, project_id: 1},
    {task_description: 'Remove trash bag and throw it out', task_notes: 'tie it up', task_completed: false, project_id: 1},
    {task_description: 'Replace trash bag', task_notes: 'do not rip it', task_completed: false, project_id: 1},
    // Clean the Bathroom
    {task_description: 'Put on gloves', task_notes: 'make sure they are not loose', task_completed: false, project_id: 2},
    {task_description: 'Use sponge and disinfectant to clean', task_notes: 'Magic Erasers work great', task_completed: false, project_id: 2},
    // Wash the Dishes
    {task_description: 'Get dishes wet', task_notes: 'use water', task_completed: false, project_id: 3},
    {task_description: 'Use dish soap', task_notes: 'I like dawn', task_completed: false, project_id: 3},
]

const project_resources = [
    // Take Out Trash
    {project_id: 1, resource_id: 1},
    {project_id: 1, resource_id: 2},
    // Clean the Bathroom
    {project_id: 2, resource_id: 3},
    {project_id: 2, resource_id: 4},
    {project_id: 2, resource_id: 5},
    // Wash the Dishes
    {project_id: 3, resource_id: 6},
]

exports.seed = async function (knex) {
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
    await knex('project_resources').insert(project_resources)
}