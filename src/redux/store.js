import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

//add middleware to the store so that whenever actions get fired, we can catch them and display them.
//check redux documentation for more

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;