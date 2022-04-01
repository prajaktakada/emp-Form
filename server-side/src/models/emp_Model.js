
   
const mongoose = require('mongoose')

const empSchema = new mongoose.Schema({

    emp_name: {
        type: String,
        required: true
    },
    date_of_birth: {
        type: Date,
        required: true
    },
   designation: {
        type: String,
        required: true,
    }
    },{ timestamps: true })

module.exports = mongoose.model('empDB', empSchema)