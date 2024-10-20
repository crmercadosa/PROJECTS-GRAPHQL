const projectService = require('../services/projectService');

const resolvers = {
    Query: {
        projects: () => {
            return projectService.getAllProjects();
        }
    },
    Mutation: {
        createProject: (_, { name, description, startDate, endDate, status, budget }) => {
            return projectService.createProject(name, description, startDate, endDate, status, budget);
        },
        updateProject: (_, { _id, name, description, startDate, endDate, status, budget }) => {
            return projectService.updateProject(_id, { name, description, startDate, endDate, status, budget });
        },
        deleteProject: (_, { _id }) => {
            return projectService.deleteProject(_id);
        }
    }
};

module.exports = resolvers;
