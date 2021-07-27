import { useParams } from "react-router-dom";
const axios = require ('axios');
const Student = require('./student.jsx');
const Teacher = require('./teacher.jsx');

function ClassRoom(){
    let {name} = useParams();
    const classRoomData= [];
    let getData = () => {
        axios.get(`http://localhost:3003/classRoom/${name}`)
        .then(res => classRoomData.push(res.data))
        .catch(err => console.log(err.data))
    };
    return (
        <div>
            <h2>Welcome to Class {name}.</h2>
            {/* Render each student from classRoomData */}
            {/* Pass data to child elements from classRoomData */}
            {/* Select a teacher before commencing attendance */}
            {/* Give option to add new student and new teacher to the class */}
            {/* For attendance use checkbox to mark him/her present. */}
        </div>
    );
};

export default ClassRoom;