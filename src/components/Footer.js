import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, faDesktop} from '@fortawesome/free-solid-svg-icons';
import {faTwitter, faFacebookF, faInstagram, faYoutube} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return(
        <footer>
            <div className="container-fluid p-0">
                <div className="row text-left">
                    <div className="col-md-5">
                        <h1 className="text-light">About Us</h1>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque inventore modi praesentium, provident sapiente!</p>
                        <p className="text-muted pt-4">Copyright ©2020 All rights reserved | This template is made with by <span>Roman Legun</span></p>
                    </div>
                    <div className="col-md-5">
                        <h4 className="text-light">Newsletter</h4>
                        <p className="text-muted">Stay Updated</p>
                        <form className="form-inline">
                            <div className="col pl-0">
                                <div className="input-group pr-5">
                                    <input type="text" className="form-control bg-dark text-white" placeholder="Email"/>
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <FontAwesomeIcon icon={faArrowRight}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-2 col-sm-12">
                        <h4 className="text-light">Follow Us</h4>
                        <p className="text-muted">Let us be social</p>
                        <div className="column">
                            <i><FontAwesomeIcon icon={faFacebookF} size="lg"/></i>
                            <i><FontAwesomeIcon icon={faInstagram} size="lg"/></i>
                            <i><FontAwesomeIcon icon={faTwitter} size="lg"/></i>
                            <i><FontAwesomeIcon icon={faYoutube} size="lg"/></i>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}