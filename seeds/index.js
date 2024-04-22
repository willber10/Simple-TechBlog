const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAndLog = async (seedFunction, message) => {
  await seedFunction();
  console.log(`\n----- ${message} -----\n`);
};

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- SUCCESSFULLY SYNCED -----\n');

  await seedAndLog(seedUsers, 'USERS SEEDED');
  await seedAndLog(seedPosts, 'POSTS SEEDED');
  await seedAndLog(seedComments, 'COMMENTS SEEDED');

  process.exit(0);
};

seedAll();