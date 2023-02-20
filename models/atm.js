const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AtmSchema = new Schema({

    bank: {
        name: {
            type: String,
            required: true
        },
        branch: {
            type: String,
            required: true
        }
    },
    address: {
        streetName: {
            type: String,
            required: true
        },
        postCode: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        geoLocation: {
            latitude: {
                type: String,
                required: true
            },
            longitude: {
                type: String,
                required: true
            }
        }
    },
    supportedLanguages: {
        type: Array,
        required: true
    },
    atmServices: {
        type: Array,
        required: true
    },
    supportedCurrencies: {
        type: Array,
        required: true,
    },
    minimumPossibleAmount: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Atm', AtmSchema)