import {applyMiddleware, combineReducers} from 'redux' 
import thunk from 'redux-thunk';
import { createStore } from 'redux';
import { CarouselReducer } from '../reducers/CarouselReducer';

const rootReducer = combineReducers({
    //state ung dung
    CarouselReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));