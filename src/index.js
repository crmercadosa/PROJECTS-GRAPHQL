const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./schemas/projectSchema');
const resolvers = require('./resolvers/projectResolver');

const startServer = async () => {
    await mongoose.connect('mongodb+srv://CrissCross20:CMS192001@cluster0.rvuph.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    const server = new ApolloServer({typeDefs, resolvers});

    server.listen().then(({url}) => {
        console.log(`Servidor corriento en ${url}`);
    });
};


startServer();