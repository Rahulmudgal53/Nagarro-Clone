import React from "react";
import HeroData from "../../constants/HeroData";
import Hero from "../../components/Hero/Hero";
import CardMap from "../../utils/CardMap";
import { services } from "../../constants/ListItems";

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
      <CardMap title={'our services'} content={services} />
    </div>
  );
}

export default Services;
