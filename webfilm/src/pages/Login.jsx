import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { dangNhapAction } from '../redux/actions/FilmManagementActions';
import AdminPage from '../templates/AdminPage';
import Home from '../pages/HomePage/Home';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taikhoan: '',
            matkhau: '',
        }
    }
    state = {
        redirect: false
    }
    renderRedirect = () => {
        let userLogin = JSON.parse(localStorage.getItem('userLogin'));
        console.log('gdfg', userLogin);

        if (userLogin) {
            this.setState({
                redirect: true
            })
        }
        if (this.state.redirect) {
            return <Redirect to='/admin' />
        }
    }

    xulyNhap = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    dangNhap = (e) => {
        e.preventDefault();
        this.props.dangNhap(this.state);
    }

    render() {
        return (
            <div>
                {this.renderRedirect()}
                <form onSubmit={this.dangNhap} className="container">
                    <h3>Đăng nhập</h3>
                    <div className="form-group">
                        <span>Tài khoản</span>
                        <input className="form-control" name="taiKhoan" onChange={this.xulyNhap} />
                    </div>
                    <div className="form-group">
                        <span>Mật khẩu</span>
                        <input className="form-control" name="matKhau" onChange={this.xulyNhap} />
                    </div>
                    <button>Đăng nhập</button>
                </form>
            </div>
        )
    }
}
const mapDispacthToProps = (dispacth) => {
    return {
        dangNhap: (nguoiDung) => {
            dispacth(dangNhapAction(nguoiDung));
        }
    }
}
export default connect(null, mapDispacthToProps)(Login);
