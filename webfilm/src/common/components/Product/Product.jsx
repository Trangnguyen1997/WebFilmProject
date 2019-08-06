import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {getListFilmAction} from '../../../redux/actions/FilmManagementActions';

function Product(props) {
    useEffect(() => {
        props.getListFilm();
    }, [])

    return (
        <div className="container">
        {props.ListFilm.map((film,index)=>{
            return <div className="col-md-3 col-sm-6" key={index}>
            <div className="container">
            <div className="card" style={{ width: 200 }}>
                <img className="card-img-top" src={film.hinhAnh} alt/>
                <div className="card-body">
                    <h4 className="card-title">{film.tenPhim}</h4>
                    <p className="card-text">Some example text.</p>
                    <a href="#" className="btn btn-primary">See Profile</a>
                </div>
            </div>

            </div>
        </div>
        })}
        best trang
       </div>
    )
}
const mapStateToProps = (state) =>{
    return {
        ListFilm:state.listFilmReducer.ListFilm
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        getListFilm:()=>{
            dispatch(getListFilmAction());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Product);