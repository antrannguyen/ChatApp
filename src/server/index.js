const { ApolloServer } = require("apollo-server");

const { sequelize } = require("./models");

const resolvers = require("./services/graphql/resolvers");
const typeDefs = require("./services/graphql/typeDefs");

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);

	sequelize
		.authenticate()
		.then(() => console.log("Database connected!!"))
		.catch((err) => console.log(err));
});
