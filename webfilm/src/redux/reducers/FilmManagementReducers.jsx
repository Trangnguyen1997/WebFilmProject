import * as types from '../contants/FilmManagement';

const stateDefault = {
    ListFilm:[]
}

const listFilmReducer = (state=stateDefault, action)=>{
    switch(action.type){
        case types.GET_LIST_FILM:{
            state.ListFilm = action.ListFilm;
            return {...state}
        }
    }
    return {...state}
}

export default listFilmReducer;