import React from "react";
import Carousel from '../../utils/Carousel';

import Carousel1 from "../../assets/homepage/car1.webp";
import Carousel2 from "../../assets/homepage/Car2.jpg";
import Carousel3 from "../../assets/homepage/car3.webp";


const slides = [
    {
        // id: 1,
        // title: "Slide 1",
        // description: "Description for Slide 1",
        // imageUrl: {Carousel1},
        Carousel1
    },
    {
        // id: 2,
        // title: "Slide 2",
        // description: "Description for Slide 2",
        // imageUrl: {Carousel2},
        Carousel2
    },
    {
        // id: 3,
        // title: "Slide 3",
        // description: "Description for Slide 3",
        // imageUrl: {Carousel3},
        Carousel3
    },
];


function Homepage() {
  return (
    <div>
      {/* <Carousel children={slides} autoSlide={true} autoSlideInterval={3000} /> */}
    </div>
  );
}

export default Homepage;
