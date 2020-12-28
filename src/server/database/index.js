import Sequelize from "sequelize";
import configFile from "../config/";
import models from "../models";

const env = process.env.NODE_ENV || "development";
const config = configFile[env];

const sequelize = new Sequelize(
	config.database,
	config.username,
	config.password,
	config
);

//checking if Sequelize connect with given database or not
sequelize
	.authenticate()
	.then(() => console.log("Data connected..."))
	.catch((err) => console.log("EEEEEE " + err));

const db = {
	models: models(sequelize),
	sequelize,
};

export default db;
