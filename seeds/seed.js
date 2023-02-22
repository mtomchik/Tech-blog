// seed the database with default data
require('dotenv').config({ path: __dirname + `/../.env` });
const sequelize = require('../../seed/14-MVC-Tech-Blog/config/connection');

const seedComment = require('../../seed/14-MVC-Tech-Blog/seeds/comment-seed');
const seedPost = require('../../../Tech-blog/seeds/post-seed');
const seedUser = require('../../seed/14-MVC-Tech-Blog/seeds/user-seed');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  await seedPost();
  console.log('\n----- POSTS SEEDED -----\n');

  await seedComment();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
