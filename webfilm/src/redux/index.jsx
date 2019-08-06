import {combineReducers} from 'redux';
import listFilmReducer from './reducers/FilmManagementReducers';

const rootReducer = combineReducers({
    listFilmReducer
});
export default rootReducer;