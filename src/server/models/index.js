import Sequelize from "sequelize";
// import R from "babel-plugin-require-context-hook";
// const RR = R();
if (process.env.NODE_ENV === "development") {
	require("babel-plugin-require-context-hook/register")();
}

export default (sequelize) => {
	let db = {};

	const context = require.context(".", true, /\.js$/, "sync");
	context
		.keys()
		.map(context)
		.forEach((module) => {
			const model = module(sequelize, Sequelize);
			db[model.name] = model;
		});

	Object.keys(db).forEach((modelName) => {
		if (db[modelName].associate) {
			db[modelName].associate(db);
		}
	});

	return db;
};
