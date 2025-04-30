import React from 'react';
import { Link } from 'react-router-dom';

function Slider({ image, title = '', heading = '', description = '', button = {} }) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      {/* Background Image */}
      <img
        src={image}
        alt="Slider Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0  bg-black bg-opacity-40"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-[5%] md:px-[10%]">
        {title && <h3 className="text-primary text-lg uppercase tracking-wider mb-2">{title}</h3>}
        {heading && <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-4">{heading}</h1>}
        {description && <p className="text-gray-200 text-lg max-w-2xl mb-6">{description}</p>}

        {button?.text && button?.link && (
          <Link
            to={button.link}
            className="inline-block bg-primary hover:bg-primary-dark transition-colors text-white font-semibold px-6 py-3 rounded-md text-lg"
          >
            {button.text}
          </Link>
        )}
      </div>

    </div>
  );
}

export default Slider;
