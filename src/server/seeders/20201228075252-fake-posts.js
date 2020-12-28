"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Posts",
			[
				{
					text: "ABC",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					text: "ABC 2",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
		/**
		 *
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Posts", null, {});

		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
