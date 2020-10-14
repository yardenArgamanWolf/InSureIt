const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const capacitySchema = new Schema({
    offer_ID: {
        type: String,
    },
    capacity_value:{
        type: String,
    },
    insurance_claim:{
        type: String,
    },
    structure_type:{
        type: String,
    },
    price:{
        type: String,
    },
    floor:{
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

module.exports = mongoose.model('Capacity' , capacitySchema);