exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects").insert([
    {
      id: 1,
      name: "Secret Family Recipe Cookbook",
      description: "an app that help find recipes handed down thru generation",
      completed: false,
    },
    {
      id: 2,
      name: "Food Truck Tracker",
      description:
        "an app that help the find and track all the food trucks available in the area",
      completed: false,
    },
    {
      id: 3,
      name: "AirBnB Optimal Price",
      description: "an app the helps users to find an affordable getaway place away from home",
      completed: true,
    },
  ]);
};