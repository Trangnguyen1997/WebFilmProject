import React, { Component } from 'react'
import Product from './Product';

export default class ProductList extends Component {
    render() {
        return (
            <div className="container m-auto">
            {/* Nav pills */}
            <ul className="nav nav-pills" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="pill" href="#home">PHIM SẮP CHIẾU</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#menu1">PHIM ĐANG CHIẾU</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#menu2">PHIM HOT NHẤT</a>
              </li>
            </ul>
            {/* Tab panes */}
            <div className="tab-content">
              <div id="home" className="container tab-pane active"><br />
                <div className="row">
               <Product/>
                </div>
              
              </div>
              <div id="menu1" className="container tab-pane fade"><br />
              <div className="row">
               <Product/>
                </div>
              </div>
              <div id="menu2" className="container tab-pane fade"><br />
              <div className="row">
               <Product/>
                </div>
              </div>
            </div>
          </div>
          
        )
    }
}
