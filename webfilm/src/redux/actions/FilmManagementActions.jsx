import axios from 'axios';
import * as types from '../contants/FilmManagement';
import * as config from '../../common/Config/Config';

export const getListFilmAction = ()=>{
    return dispatch =>{
        axios({
            method: 'GET',
            url:config.domain + 'QuanLyPhim/LayDanhSachPhim?maNhom=GP02'
        }).then(result=>{
            dispatch({
                type:types.GET_LIST_FILM,
                ListFilm:result.data,               
            })           
        }).catch(error =>{
            console.log(error.response.data);            
        })
    }
}