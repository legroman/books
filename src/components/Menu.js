import React, {useState} from "react";
import {Navbar, Nav} from "react-bootstrap";
import $ from "jquery";
import {faBookReader} from "@fortawesome/free-solid-svg-icons";
import {faAlignRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Menu() {
    const [sticky, setSticky] = useState("");

    $(window).scroll(function () {
        let oTop = $(".section-2").offset().top - window.innerHeight;

        $(window).scrollTop() > oTop ? setSticky("sticky") : setSticky("");
    });

    return (
        <Navbar expand="lg" className={`navbar ${sticky}`}>
            <Navbar.Brand id="brand" href="#home"><FontAwesomeIcon icon={faBookReader}
                                                                   size="3x"/> Books</Navbar.Brand>
            <Navbar.Toggle className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                           aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="text-light"><FontAwesomeIcon icon={faAlignRight}/></i>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <div className="mr-auto"></div>
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Nav.Link className="nav-link" href="#">Home <span
                            className="sr-only">(current)</span></Nav.Link>
                    </li>
                    <li className="nav-item">
                        <Nav.Link className="nav-link" href="#">Course</Nav.Link>
                    </li>
                    <li className="nav-item">
                        <Nav.Link className="nav-link" href="#">Price</Nav.Link>
                    </li>
                    <li className="nav-item dropdown">
                        <div className="dropdown">
                            <Nav.Link href="#" className="nav-link">Pages</Nav.Link>
                            <div className="dropdown-content">
                                <a href="#">Generic</a>
                                <a href="#">Element</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Nav.Link className="nav-link" href="#">Fact</Nav.Link>
                    </li>
                    <li className="nav-item">
                        <Nav.Link className="nav-link" href="#">About</Nav.Link>
                    </li>
                </ul>
            </Navbar.Collapse>
        </Navbar>
    )
}