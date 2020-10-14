const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const structureSchema = new Schema({
    offer_ID: {
        type: String,
    },
    structure_type:{
        type: String,
    },
    floor:{
        type: String,
    },
    structure_age:{
        type: String,
    },
    insurance_amount:{
        type: String,
    },

    water_damage:{
        type: String,
    },
    price:{
        type: String,
    },
    insurance_claim:{
        type: String,
    },
    mortgage:{
        type: String,
    },
    service_index:{
        type: String,
    },
    company:{
        type: String,
    },
    earthquake_cover:{
        type: String,
    },
    robbery_cover:{
        type: String,
    }
})

module.exports = mongoose.model('Structure' , structureSchema);