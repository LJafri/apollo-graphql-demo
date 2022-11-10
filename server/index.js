const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 4000;
const { graphqlHTTP } = require('express-graphql');
const app = express();

app.use('/graphql', graphqlHTTP({
    
}))

app.listen(port, console.log(`Server running on port ${port}`));