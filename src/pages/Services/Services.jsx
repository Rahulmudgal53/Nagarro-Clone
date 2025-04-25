import React from 'react'
import HeroData from '../../constants/HeroData';
import Hero from '../../utils/Hero';

function Services() {

    const { area, title, description, button } = HeroData.pages.services;

  return (
    <div>
        <Hero
        area={area}
        title={title}
        description={description}
        button={button}
      />

    </div>
  )
}

export default Services