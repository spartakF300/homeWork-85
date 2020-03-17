import React from 'react';

import {Route, Switch} from "react-router-dom";
import MainPage from "./containers/MainPage/MainPage";
import Albums from "./containers/Albums/Albums";
import Header from "./Componets/Header/Header";
import Tracks from "./containers/Tracks/Tracks";
import Login from "./containers/Login/Login";
import Register from "./containers/Registor/Register";
import TrackHistory from "./containers/TrackHistory/TrackHistory";

function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/track_history" component={TrackHistory}/>
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login}/>
                <Route exact path="/albums/:id" component={Albums}/>
                <Route exact path="/tracks/:id" component={Tracks}/>
            </Switch>
        </div>
    );
}

export default App;
