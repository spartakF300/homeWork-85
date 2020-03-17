import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, combineReducers, compose, createStore,} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import {createBrowserHistory} from "history";

import {ConnectedRouter, connectRouter, routerMiddleware} from 'connected-react-router';
import App from './App';
import reducerArtists from './store/reducers/reducerArtists';
import albumsReducer from "./store/reducers/albumsReducer";
import reducerTracks from "./store/reducers/reducerTracks"
import usersReducer from "./store/reducers/usersReducer";
import trackHistory from "./store/reducers/trackHistoryReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const history = createBrowserHistory();


const rootReducer = combineReducers({
    router: connectRouter(history),
    artists: reducerArtists,
    albums: albumsReducer,
    tracks: reducerTracks,
    users: usersReducer,
    trackHistory: trackHistory
});
const middleware = [
    thunkMiddleware,
    routerMiddleware(history)

];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(rootReducer,enhancers );

const app = (
    <Provider store={store}>
    <ConnectedRouter history={history}>
    <App/>
    </ConnectedRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
