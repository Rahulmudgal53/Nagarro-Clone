import React from 'react'
import Carousel1 from "../../assets/homepage/car1.webp";
import Carousel2 from "../../assets/homepage/Car2.jpg";
import Carousel3 from "../../assets/homepage/car3.webp";
import Carousel4 from "../../assets/homepage/car4.webp";
import Carousel from "../../utils/Carousel"; // assuming you have it
import Slider from "../../utils/Slider"; // your current slider

function HeroCarousel() {
    const sliderData = [
        {
          title: "Innovating for the Future",
          heading: "Pioneering Digital Solutions",
          description:
            "At Nagarro, we design scalable, future-ready digital experiences that help businesses grow and transform.",
          image: Carousel1,
          button: {
            text: "Discover Innovation",
            link: "/innovation",
          },
        },
        {
          title: "Careers at Nagarro",
          heading: "Dreamers, Doers, Drivers of Change",
          description:
            "Join a diverse, global team where your ideas matter and you can make an impact from day one.",
          image: Carousel2,
          button: {
            text: "Explore Careers",
            link: "/careers",
          },
        },
        {
          title: "Customer Success",
          heading: "Building Strong Partnerships",
          description:
            "We work hand-in-hand with clients to create custom solutions that drive real business value and success.",
          image: Carousel3,
          button: {
            text: "Our Work",
            link: "/case-studies",
          },
        },
        {
          title: "Sustainability Matters",
          heading: "Engineering a Greener Future",
          description:
            "We are committed to sustainability and corporate responsibility, shaping a better tomorrow through technology.",
          image: Carousel4,
          button: {
            text: "Learn More",
            link: "/sustainability",
          },
        }
      ];
  return (
<div>
      <Carousel autoSlide={true} autoSlideInterval={4000}>
        {sliderData.map((slide, idx) => (
          <Slider
            key={idx}
            title={slide.title}
            heading={slide.heading}
            description={slide.description}
            image={slide.image}
            button={slide.button.text}
          />
        ))}
      </Carousel>
    </div>  )
}

export default HeroCarousel