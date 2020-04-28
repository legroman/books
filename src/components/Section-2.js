import React from "react";
import $ from "jquery";

export default function Section2() {
    let nCount = function (selector) {
        $(selector).each(function () {
            $(this).animate({Counter: $(this).text()},{duration: 4000, easing: "swing", step: function (value) {
                    $(this).text(Math.ceil(value))
                }})
        })
    };
    let a = 0;
    $(window).scroll(function () {
        let oTop = $(".numbers").offset().top-window.innerHeight;
        if (a === 0 && $(window).scrollTop() >= oTop){
            a++;
            nCount(".rect>h1")
        }
    });

    return(
        <section className="section-2 container-fluid p-0">
            <div className="cover">
                <div className="content text-center">
                    <h1>Some Futures That Made Us Unique</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, sunt?</p>
                </div>
            </div>
            <div className="container-fluid text-center">
                <div className="numbers d-flex flex-md-row flex-wrap justify-content-center">
                    <div className="rect">
                        <h1>2345</h1>
                        <p>Happy Client</p>
                    </div>
                    <div className="rect">
                        <h1>6784</h1>
                        <p>Cups Coffee</p>
                    </div>
                    <div className="rect">
                        <h1>1056</h1>
                        <p>Tickets Submitted</p>
                    </div>
                    <div className="rect">
                        <h1>9152</h1>
                        <p>Total Projects</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
