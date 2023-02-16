const { User } = require('../models');

const userData = [
    {
		"username": "matt",
        "email": "matt@matt.com",
		"password": "123456"
	},
	{
		"username": "Kristen",
        "email": "wife@wife.net",
		"password": "123456"
	},
	{
		"username": "Edward",
        "email": "edward@scissor-hands.com",
		"password": "123456"
	},
	{
		"username": "Merida",
        "email": "merida@bears.org",
		"password": "123456"
	}
];

const seedUser = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUser;