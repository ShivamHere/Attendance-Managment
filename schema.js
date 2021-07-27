const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    admissionNo: {
        type: Number,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: [1, 'Must be positive']
    },
    present: {
        type: Boolean
    }
});

const teacherSchema = new mongoose.Schema({
    empId: {
        type: Number,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: [1, 'Must be positive']
    }
});

const classSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    teachers: [teacherSchema],
    students: [studentSchema]
});

module.exports = { teacherSchema, studentSchema, classSchema };