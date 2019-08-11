import * as types from '../contants/FilmManagement';

const stateDefault = {
    ListFilm:[],
    // isLogin: localStorage.getItem('isLogin') ? localStorage.getItem('isLogin') : false
}

const listFilmReducer = (state=stateDefault, action)=>{
    switch(action.type){
        case types.GET_LIST_FILM:{
            state.ListFilm = action.ListFilm;
            return {...state}
        }
        case types.DANG_NHAP:{
            state.isLogin = action.isLogin
            return{...state}
        }
    }
    return {...state}
}

export default listFilmReducer;