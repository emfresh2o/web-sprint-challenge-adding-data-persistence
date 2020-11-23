// build your `Project` model here
const db = require('../data/db-config.js');

module.exports = {
    getProjects,
    addProjects,
    findById, 
    remove
}

function getProjects(){
    return db('projects')
}

function findById(id){
    return db('projects')
        .where({id})
        .first();
}

function addProjects(project){
    return db('projects')
        .insert(project, 'id')
        .then(id => {
            return findById(id[0])
        })
}

function remove(id) {
    return db('projects')
    .where({ id })
    .del();
}