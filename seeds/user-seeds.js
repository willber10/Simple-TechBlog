const { User } = require('../models');

const userData = [
  {
    username: "john_doe",
    twitter: "johndoefakeexample",
    github: "johnd",
    email: "john_doe@gmail.com",
    password: "p@ssword7"
  },
  {
    username: "jane_doe",
    twitter: "janedoefakeexample",
    github: "janed",
    email: "jane_doe@gmail.com",
    password: "p@ssword8"
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;