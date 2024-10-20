const { gql } = require('apollo-server');

const typeDefs = gql`
    type Project {
        _id: ID!
        name: String!
        description: String
        startDate: String
        endDate: String
        status: String
        budget: Float
    }

    type Query {
        projects: [Project]!
    }

    type Mutation {
        createProject(
            name: String!, 
            description: String, 
            startDate: String, 
            endDate: String, 
            status: String, 
            budget: Float
        ): Project!

        updateProject(
            _id: ID!, 
            name: String, 
            description: String, 
            startDate: String, 
            endDate: String, 
            status: String, 
            budget: Float
        ): Project!

        deleteProject(_id: ID!): Project!
    }
`;

module.exports = typeDefs;