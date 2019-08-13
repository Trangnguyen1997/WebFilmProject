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
export const dangNhapAction = (nguoiDung) =>{
    return dispatch =>{
        axios({
            method:'POST',
            url:config.domain + 'QuanLyNguoiDung/DangNhap',
            data:nguoiDung
        }).then(result=>{
            localStorage.setItem(config.accessToken,result.data.accessToken);
            localStorage.setItem(config.userLogin, JSON.stringify(result.data))
            dispatch({
                type:types.DANG_NHAP,
                isLogin:true,
            })
        }).catch(error=>{
            dispatch({
                type:types.DANG_NHAP,
                isLogin:false
            })
            console.log(error.response.data);
            
        })
    }
}