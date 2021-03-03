const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    taskname: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    project: {
        type: String,
        required: true
    },
    client: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    remarks: String
});

module.exports = mongoose.model('TasksCollection', TaskSchema);