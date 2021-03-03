const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    projectID: {
        type: Number,
        required: true
    },
    projectName: {
        type: String,
        required: true
    },
    projectDescription: String

});
module.exports = mongoose.model("ProjectCollection", ProjectSchema);