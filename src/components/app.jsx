import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ClassRoom from "./classRoom.jsx";
import MainPage from "./mainPage.jsx";

function App(){
    return(
        <Router>
            <Switch>
                <Route path = "/classRoom/:name">
                    <ClassRoom/>
                </Route>
                <Route path = '/'>
                    <MainPage/>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;