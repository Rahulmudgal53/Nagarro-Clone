import React from "react";

import HeroCarousel from "./HeroCarousel";
import Banner from "../../components/Hero/Banner";
import Waves from "../../utils/Waves";

function Homepage() {
  return (
    <div>
      <HeroCarousel />
      <div>
        <Banner
          waves= 'true'
          customText="max-w-[50%] text-xl"
          text="With over 18,000 Nagarrians in 38 countries, Nagarro drives business value and engineering excellence in over 1000 clients globally. The company is distinguished by its entrepreneurial, agile, and global character, as well as its CARING values and mindset."
        />

        
      </div>
    </div>
  );
}

export default Homepage;
