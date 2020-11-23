exports.seed = function (knex) {
  return knex("tasks").insert([
    {
      id: 1,
      notes: "error processing recipe cookbook api",
      description: "recipe image are missing",
      project_id: 1,
      completed: false,
    },
    {
      id: 2,
      notes:
        "we need an efficient way to retrieve the api_key from the backend",
      description: "api_key is not valid",
      completed: false,
      project_id: 1,
    },
    {
      id: 3,
      notes: "we need to discuss all the project structure",
      description: "fix login failure fetching data on a given api_key",
      project_id: 2,
      completed: false,
    },
    {
      id: 4,
      notes: "map api component is not rendering",
      description: "Cannot find any food truck on map",
      project_id: 2,
      completed: false,
    },
    {
      id: 5,
      notes: "Error data rendering of images",
      description: "Fix backend images",
      project_id: 3,
      completed: false,
    },
  ]);
};