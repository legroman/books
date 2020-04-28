import React from "react";
import person1 from "../images/person-1.jpg";
import person2 from "../images/person-2.jpg";
import person3 from "../images/person-3.jpg";
import person4 from "../images/person-4.jpg";

export default function Section5() {
    return(
        <section className="section-5">
            <div className="container text-center">
                <h1 className="text-dark">What Your Reader's Say About Us</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="team row">
                <div className="col-md-4 col-12 text-center">
                    <div className="card mr-2 d-inline-block shadow-lg">
                        <div className="card-img-top">
                            <img src={person2} alt="member" className="img-fluid border-radius p-4"/>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Blalock Jolene</h3>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid assumenda explicabo facere laborum laudantium magni maxime, nobis quis quo, repellat repellendus repudiandae ullam! Accusantium cupiditate harum nulla quibusdam veritatis!
                            </p>
                            <a href="#" className="text-secondary text-decoration-none">Go Somewhere</a>
                            <p className="text-black-50">CEO at Google</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    {/*Carousel stared*/}
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active text-center">
                                {/*Card 2*/}
                                <div className="card mr-2 d-inline-block shadow-lg">
                                    <div className="card-img-top">
                                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" alt="member" className="img-fluid rounded-circle w-50 p-4"/>
                                    </div>
                                    <div className="card-body">
                                        <h3 className="card-title">Alien Agnes</h3>
                                        <p className="card-text">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid assumenda explicabo facere laborum laudantium magni maxime, nobis quis quo, repellat repellendus repudiandae ullam! Accusantium cupiditate harum nulla quibusdam veritatis!
                                        </p>
                                        <a href="#" className="text-secondary text-decoration-none">Go Somewhere</a>
                                        <p className="text-black-50">CEO at Google</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="card mr-2 d-inline-block shadow-lg">
                                    <div className="card-img-top">
                                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" alt="member" className="img-fluid rounded-circle w-50 p-4"/>
                                    </div>
                                    <div className="card-body">
                                        <h3 className="card-title">Amiel Barbara</h3>
                                        <p className="card-text">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid assumenda explicabo facere laborum laudantium magni maxime, nobis quis quo, repellat repellendus repudiandae ullam! Accusantium cupiditate harum nulla quibusdam veritatis!
                                        </p>
                                        <a href="#" className="text-secondary text-decoration-none">Go Somewhere</a>
                                        <p className="text-black-50">CEO at Google</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Carousel end*/}
                </div>
                <div className="col-md-4 col-12 text-center">
                    <div className="card mr-2 d-inline-block shadow-lg">
                        <div className="card-img-top">
                            <img src={person3} alt="member" className="img-fluid border-radius p-4"/>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Olivia Louis</h3>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid assumenda explicabo facere laborum laudantium magni maxime, nobis quis quo, repellat repellendus repudiandae ullam! Accusantium cupiditate harum nulla quibusdam veritatis!
                            </p>
                            <a href="#" className="text-secondary text-decoration-none">Go Somewhere</a>
                            <p className="text-black-50">CEO at Google</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}