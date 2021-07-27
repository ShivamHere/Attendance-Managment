const Redirect = require("react-router-dom").Redirect;
const axios = require('axios');

let data1, data2;

let sendData = () => {
    axios.post("http://localhost:3003/addClass", {name:data1})
        .then(res => console.log('Data send'))
        .catch(err => console.log(err.data))
}

let gotoClass = () => {
    return <Redirect to = {`/classRoom/${data2}`}/>
};

function MainPage() {
    return (<div>
        <h1>Attendance Management System</h1>
        <form onSubmit={sendData}>
            <label>Class Name: </label>
            <input type="text" value={data1} required />
            <input type="submit" value="Add Class" />
        </form>

        <form onSubmit={gotoClass}>
            <label>Class Name: </label>
            <input type="text" value={data2} required />
            <input type="submit" value="Goto Class" />
        </form>
    </div>);
}

export default MainPage;