import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

export default function Section4() {
    return(
        <section className="section-4 container-fluid p-0 text-center">
            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <h1>Download Your App For all Platforms</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto assumenda, corporis deleniti deserunt doloribus earum error harum neque nobis odio officia porro possimus praesentium provident quas quidem quod saepe soluta suscipit tenetur velit, veniam!</p>
                </div>
            </div>
            <div className="platform row">
                <div className="col-md-6 col-sm-12 text-right">
                    <div className="desktop shadow-lg">
                        <div className="d-flex flex-row justify-content-center">
                            <i className="py-2 pr-3"><FontAwesomeIcon icon={faDesktop} size="3x"/></i>
                            <div className="text text-left">
                                <h3 className="pt-1 m-0">Desktop</h3>
                                <p className="p-0 m-0">On Website</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 text-left">
                    <div className="desktop shadow-lg">
                        <div className="d-flex flex-row justify-content-center">
                            <i className="py-2 pr-3"><FontAwesomeIcon icon={faMobileAlt} size="3x"/></i>
                            <div className="text text-left">
                                <h3 className="pt-1 m-0">On Mobile</h3>
                                <p className="p-0 m-0">On Play Store</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}