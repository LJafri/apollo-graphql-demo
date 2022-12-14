const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 4000;
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const app = express();

app.use(
    '/graphql', 
    graphqlHTTP({
    schema, 
    graphiql: process.env.NODE_ENV === 'dev'
}))

app.listen(port, console.log(`Server running on port ${port}`))