import React from "react";

export default function Cards() {
    return(
        <div className="cards">
            <div className="d-flex flex-row justify-content-center flex-wrap">
                <div className="card">
                    <div className="card-body">
                        <div className="title">
                            <div className="card-title">PDF</div>
                        </div>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                        <div className="pricing">
                            <h1>$77.99</h1>
                            <a href="#" className="btn btn-dark px-5 py-2 mb-5">Purchase Now</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="title">
                            <div className="card-title">E-book</div>
                        </div>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                        <div className="pricing">
                            <h1>$99.99</h1>
                            <a href="#" className="btn btn-dark px-5 py-2 mb-5">Purchase Now</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="title">
                            <div className="card-title">Print Copy</div>
                        </div>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                        <div className="pricing">
                            <h1>$58.99</h1>
                            <a href="#" className="btn btn-dark px-5 py-2 mb-5">Purchase Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}