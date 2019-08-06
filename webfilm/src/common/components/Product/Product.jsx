import React from 'react'

export default function Product() {
    return (
        <div className="col-md-3 col-sm-6">
            <div className="container">
            <div className="card" style={{ width: 200 }}>
                <img className="card-img-top" src="img_avatar1.png" alt="Card image"/>
                <div className="card-body">
                    <h4 className="card-title">John Doe</h4>
                    <p className="card-text">Some example text.</p>
                    <a href="#" className="btn btn-primary">See Profile</a>
                </div>
            </div>

            </div>
        </div>
    )
}
