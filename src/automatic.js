//===========================================
// IMPORT DEPENDENCIES
//===========================================
import React, { Component } from "react";
import Slideshow from "./slideshow";
import slide1 from "./travel.png";
import slide2 from "./restaurant.jpg";
import slide3 from "./politics.jpg";
import slide4 from "./food.jpg";
import slide5 from "./fitness.jpg";
import slide6 from "./finance.png";
//import "./custom.css";

//===========================================
// CREATE STYLES OBJECT
//===========================================
const s = {
    container: "screenW screenH dGray col",
    header: "flex1 fCenter fSize2",
    main: "flex8 white",
    footer: "flex1 fCenter"
};

//===========================================
// SLIDES DATA
//===========================================
const slides = [slide1, slide2, slide3, slide4, slide5, slide6];

//===========================================
// APP COMPONENT
//===========================================
class automatic extends Component {
    render() {
        return (
            <div className={s.container}>
                <div className={s.main}>
                    <Slideshow slides={slides} />
                </div>
            </div>
        );
    }
}

export default automatic;