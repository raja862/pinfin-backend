const { timeStamp } = require('console');
const mongoose = require('mongoose');

//Schema definition
const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        
    },
    Department: {
        type: String,
        required: true,
    },
    DateofBirth: {
        type:String,
        required: true,
        trim: true,
    
    },
    mobileNumber: {
        type: String,
        required: true,
        unique: true,
    
    },
    DateofJoining: {
        type: String,
        required: true,
        trim: true

    },
    ReportingPerson: {
        type: String,
        required: true,
        
    },

    Experience: {
        type: String,
        required: true,
    },

    salary :{
        type: String,
        required: true,
    },

    LinkedIn: {
        type: String,
        required: true,
    },
    GovernmentProof:{
        type:String,
        data:Buffer
    },
    updatedAt:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model('employees', employeeSchema);
