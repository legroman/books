import React from "react";
import book from "../images/book-header.png";

export default function Hero() {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-md-7 col-sm-12">
                    <h6>AUTHOR: DAILY TUITION</h6>
                    <h1>EXCITING ADVENTURE</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta earum est laboriosam nostrum praesentium vero. A, expedita non! Molestiae!</p>
                    <button className="btn btn-light px-5 py-2">By now for $5.99</button>
                </div>
                <div className="col-md-5 col-sm-12 h-25">
                    <img src={book} alt="book"/>
                </div>
            </div>
        </div>
    )
}