import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

/*
    ORDER OF MIDDLEWARE IS IMPORTANT! :@ https://github.com/reduxjs/redux-thunk/issues/91
*/
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()));