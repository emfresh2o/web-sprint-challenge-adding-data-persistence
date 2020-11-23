exports.seed = function (knex) {
  return knex("resources").insert([
    {
      id: 1,
      name: "Slack Room",
      description: "A place to discuss all the project structure",
    },
    { id: 2, name: "Computers", description: "Discuss all  the equipment need to work of projects" },
    {
      id: 3,
      name: "Meals",
      description: "Provide meals to team while working on project",
    },
  ]);
};