const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const s_and_c_Schema = new Schema({
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
    mortgage:{
        type: String,
    },
    capacity_value: {
        type: String,
    },
    capacity_insurance_claim:{
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

module.exports = mongoose.model('StructureAndCapacity' , s_and_c_Schema);