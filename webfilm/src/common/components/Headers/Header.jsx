import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">TEAM 1</a>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav m-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink to='/home' className="nav-link">TRANG CHỦ</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/lienhe' className="nav-link">LIÊN HỆ</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/tintuc' className="nav-link">TIN TỨC</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/tintuc' className="nav-link">ỨNG DỤNG</NavLink>
            </li>
          </ul>

          <div className="form my-2 my-lg-0">
            <NavLink to='/dangky' className="regis mr-sm-3">Đăng ký</NavLink>
            <NavLink to='/dangnhap'><button className="btnLogin my-2 my-sm-0" type="submit">Đăng nhập</button></NavLink>
          </div>

        </div>
      </div>
    </nav>
  )
}
