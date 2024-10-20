const Project = require('../models/projectModel');

module.exports = {
    getAllProjects: async () => {
        return await Project.find();
    },
    
    createProject: async (name, description, startDate, endDate, status, budget) => {
        const project = new Project({ name, description, startDate, endDate, status, budget });
        return await project.save();
    },

    updateProject: async (_id, description, startDate, endDate, status, budget) => {
        return await Project.findByIdAndUpdate(_id, { name, description, startDate, endDate, status, budget });
    },

    deleteProject: async (_id) => {
        return await Project.findByIdAndDelete(_id);
    }
};
