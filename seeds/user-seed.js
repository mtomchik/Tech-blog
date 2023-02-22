const { User } = require('../models');

const userData = [
    {
		"username": "Matt",
        "email": "matt@matt.com",
		"password": "123456"
	},
	{
		"username": "Kristen",
        "email": "wife@wife.com",
		"password": "123456"
	},
	{
		"username": "Edward",
        "email": "edward@scissor-hands.com",
		"password": "password3333"
	},
	{
		"username": "Millicent",
        "email": "millicent@fenwick.org",
		"password": "password4444"
	}
];

const seedUser = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUser;
