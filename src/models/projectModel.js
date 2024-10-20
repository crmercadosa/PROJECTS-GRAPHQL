const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    status: { type: String, enum: ['en proceso', 'completado'], default: 'en proceso' },
    budget: { type: Number }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;