const graphql = require("./graphql");

export default (utils) => ({
	graphql: graphql(utils),
});
