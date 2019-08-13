import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getListFilmAction } from '../../../redux/actions/FilmManagementActions';

function Product(props) {
    useEffect(() => {
        props.getListFilm();
    }, [])

    return (
        <div className="container">
            <div className="row">
            {props.ListFilm.map((film, index) => {
                return <div className="col-md-3 col-sm-6" key={index}>
                    <div className="container">
                        <div className="card text-center" style={{ width: 200}}>
                            <img className="card-img-top" src={film.hinhAnh} style={{ width: '100%'}} alt />
                            <div className="card-body">
                                <h4 className="card-title">{film.tenPhim}</h4>
                                <p className="card-text">Text</p>
                                <a href="#" className="btn btn-primary">Chi tiết</a>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div></div>
    )
}
const mapStateToProps = (state) => {
    return {
        ListFilm: state.listFilmReducer.ListFilm
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getListFilm: () => {
            dispatch(getListFilmAction());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);