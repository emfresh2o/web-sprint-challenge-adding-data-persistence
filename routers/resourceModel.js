// build your `Resource` model here
const db = require('../data/db-config.js');

module.exports = {
    getResource,
    addResource,
    findById, 
    remove
}

function getResource(){
    return db('resources')
}

function findById(id){
    return db('resources')
        .where({id})
        .first();
}

function addResource(resource){
    return db('resources')
        .insert(resource, 'id')
        .then(id => {
            return findById(id[0])
        })
}

function remove(id) {
    return db('resources')
    .where({ id })
    .del();
}