import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';

import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';


import mongoose from 'mongoose';

import schema from './schema';

const app = express();

app.use(cors());

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));


mongoose.connect('mongodb://localhost/graphqlserver');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB connection is working');
})

//message on browser
// app.get('/', (req, res) => res.send('Hello World'));

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}))

//message on terminal
app.listen(4000, () => console.log("Express Running on port 4000"))
