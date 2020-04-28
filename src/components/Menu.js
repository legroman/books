import React from "react";
import {faBookReader} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Menu() {
    return (
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#"><FontAwesomeIcon icon={faBookReader} size="3x"/> Books</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="mr-auto"></div>
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Course</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Price</a>
                    </li>
                    <li className="nav-item dropdown">
                        <div className="dropdown">
                            <a href="#" className="nav-link">Pages</a>
                            <div className="dropdown-content">
                                <a href="#">Generic</a>
                                <a href="#">Element</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Fact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}