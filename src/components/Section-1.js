import React from "react";
import photo1 from "../images/photo1.jpg";
import photo2 from "../images/photo2.jpg";

export default function Section1() {
return(
    <section className="section-1">
        <div className="container text-center">
            <div className="row">
                <div className="col-md-6">
                    <div className="pray">
                        <img src={photo1} alt="photo"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="panel text-left">
                        <h1>Mr. Devid Smith</h1>
                        <p className="pt-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem beatae blanditiis error fugit in modi mollitia officia optio perspiciatis, quibusdam quo reiciendis rem temporibus!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad amet, architecto atque consequuntur culpa cum cupiditate eaque eveniet fugit ipsa laborum laudantium maiores molestiae mollitia officia quas, quis quo sapiente sed soluta tenetur vero voluptatum? Ipsa itaque reprehenderit sit suscipit unde? Amet commodi harum laboriosam, neque nostrum sapiente velit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}