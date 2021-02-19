import {CREATE_RANDOM_DATA, UPDATE_COLS, UPDATE_DATA} from '../types';

const initalState = {
    columns: 100,
    data: [],

}

const DataReducer = ( state = initalState, action: any) => {
    switch (action.type) {
        case CREATE_RANDOM_DATA:
            return {...state, data: action.payload}
        case UPDATE_COLS:
            return {...state, columns: action.payload}
        case UPDATE_DATA:
            return {...state, data: action.payload}
        default:
            return {...state}
    }
}

export default DataReducer;