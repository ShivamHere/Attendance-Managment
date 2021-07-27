const express = require('express');
const app = express();
const mongoose = require('mongoose');
const schema = require('./schema');
const PORT = 3003;

const db = "mongodb://localhost:27017/attendanceDB";
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) console.error(err);
    else console.log("Connected to the mongodb");
});

//Create in DB.
function createStudent(details) {
    const Student = mongoose.model('student', schema.studentSchema);
    const student = new Student({
        admissionNo: details.admissionNo,
        name: details.name,
        age: details.age,
    });
    student.save().then(() => console.log(`${student.name} added in students collection.`));
};

function createTeacher(details) {
    const Teacher = mongoose.model('teacher', schema.teacherSchema);
    const teacher = new Teacher({
        empId: details.empId,
        name: details.name,
        age: details.age,
    });
    teacher.save().then(() => console.log(`${teacher.name} added in teachers collection.`));
};

function createClass(details) {
    const Class = mongoose.model('class', schema.classSchema);
    const c = new Class({
        name: details.name
    });
    c.save().then(() => console.log(`${c.name} added in classes collection.`));
};


//Modify in DB.

function attendance(isPresent, admissionNumber) {
    //find student using admissionNumber and mark him present.
}


app.get('/', (req, res) => {
    res.send("Welcome to server side.");
});
app.get('/classRoom/:name', (req, res) => {
    //send classroom data to front end.
});

app.post('/addClass', (req, res) => {
    //Add New class in DB.
    res.send("New Class Added");
});

app.put('/class/:name/addTeacher', (req, res) => {
    //Add New Teacher in DB & push this new teacher to class.teacher
});
app.put('/class/:name/addStudent', (req, res) => {
    //Add New Student in DB & push this new teacher to class.student
});


app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});