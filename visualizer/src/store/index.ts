import {createStore, combineReducers} from 'redux';
import DataReducer from './reducers/DataReducer';

const store = createStore(
    combineReducers({
        dataState: DataReducer
    })
)

export default store;