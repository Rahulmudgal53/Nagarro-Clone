import React from 'react';
import TextBtnCard from '../../utils/TextBtnCard';
import MegaMenuWrapper from './MegaMenuWrapper';

const aboutItems = [
  {
    title: "About nagarro",
    description: "Discover more about us, an outstanding digital solutions developer and a great place to work in.",
    link: "About us "
  },
  {
    title: "Investor relations",
    description: "Financial information, governance, reports, announcements, and investor events.",
    link: "Nagarro IR "
  },
  {
    title: "News & press releases",
    description: "Catch up to what we are doing, and what people are talking about.",
    link: "News center "
  },
  {
    title: "Caring & sustainability",
    description: "We care for our world. Learn about our initiatives.",
    link: "Learn more "
  },
  {
    title: "Fluidic Enterprise",
    description: "Beyond agility, the convergence of technology and human ingenuity.",
    link: "Learn more "
  },
];

const MegaMenuAbout = () => {
  return (
<MegaMenuWrapper className="grid grid-cols-5 gap-6"> 
{/* <div className="absolute left-0 top-full w-screen mt-4 z-50"> */}

  
       {aboutItems.map((item, index) => (
        <TextBtnCard title={item.title} description={item.description} button={{text:`${item.link}`, link:`${item.link}`}}/>
      ))}
      {/* </div> */}
    </MegaMenuWrapper>
  );
};

export default MegaMenuAbout;
