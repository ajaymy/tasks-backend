const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    clientID: {
        type: Number,
        required: true
    },
    clientName: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('ClientCollection', ClientSchema);