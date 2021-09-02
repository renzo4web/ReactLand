import {createStore, compose, applyMiddleware} from 'redux'
import {rootReducers} from "../reducers/rootReducers";
import thunk from "redux-thunk";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(thunk))
)
