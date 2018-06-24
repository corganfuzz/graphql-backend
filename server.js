import express from "express";
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import schema from './schema';

const app = express();

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));

//message on browser
// app.get('/', (req, res) => res.send('Hello World'));

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}))

//message on terminal
app.listen(4000, () => console.log("Express Running on port 4000"))
