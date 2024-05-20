import React from "react";

import { Slide } from 'react-slideshow-image';


import 'react-slideshow-image/dist/styles.css'

import kartProjectImage from '/src/images/portfolio/kartProject.jpg';
import FrontFacing from '/src/images/kart_images/FrontFacingKart.jpg';
import BackFacing from '/src/images/kart_images/BackFacingKart.jpg';
import KartLab from '/src/images/kart_images/KartLab.jpg';
import SolderingStation from '/src/images/kart_images/SolderingStation.jpg';
import VelodyneLidarBox from '/src/images/kart_images/VelodyneLidarBox.jpg';
import WiringRedo from '/src/images/kart_images/WiringRedo.jpg';

const slideImages = [kartProjectImage, FrontFacing, BackFacing, KartLab, SolderingStation, VelodyneLidarBox, WiringRedo]

const images = [
        "https://i.imgur.com/X9GBXA2.jpeg",
        "https://i.imgur.com/2U6hppb.jpeg",
        "https://i.imgur.com/O0cQZOh.jpeg",
        "https://i.imgur.com/SgFTlMV.jpeg",
        "https://i.imgur.com/xCrFqXq.jpeg",
        "https://i.imgur.com/GOSqFr5.jpeg"
    ];
export const ImageSlideshow = () => {
    return (
        <div className="slide-container">
            <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[4]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[5]})` }}>
                </div>
            </div>
            </Slide>
        </div>
    );
};


ImageSlideshow.displayName = 'KartImageSlideshow';
export default ImageSlideshow;
