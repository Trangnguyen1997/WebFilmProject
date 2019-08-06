import React from 'react'

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
              <a className="nav-link" href="#">TRANG CHỦ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">LIÊN HỆ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">TIN TỨC</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">ỨNG DỤNG</a>
            </li>
          </ul>

          <div className="form my-2 my-lg-0">
            <a href="" className="regis mr-sm-3">Đăng ký</a>
            <button className="btnLogin my-2 my-sm-0" type="submit">Đăng nhập</button>
          </div>

        </div>
      </div>
    </nav>
  )
}
