exports.up = function (knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments('id');
      tbl.string('name', 128).notNullable();
      tbl.string('description', 255).notNullable();
      tbl.boolean('completed').defaultTo(false);
    })
    .createTable('resources', tbl => {
      tbl.increments('id');
      tbl.string('name', 128).notNullable().unique();
      tbl.string('description', 256).notNullable();
    })
    .createTable('tasks', tbl => {
      tbl.increments('id');
      tbl.string('description', 256).notNullable();
      tbl.string('notes', 256);
      tbl.boolean('completed').defaultTo(false);
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('project.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('project_resources', tbl => {
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('project.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resource.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.primary(['resource_id', 'project_id']);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
