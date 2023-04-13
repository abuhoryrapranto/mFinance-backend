const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BackupSchema = new Schema({

    deviceId: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    accountType: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: false
    },
});

module.exports = mongoose.model('Backup', BackupSchema)