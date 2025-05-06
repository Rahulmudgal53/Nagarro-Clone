import React from 'react';
import Button from "../../utils/Button";
import Waves from '../../utils/Waves';

function Banner({ description = '', waves='', customText = '', button, text = '', imgSrc = '', vidSrc = '', altText = 'Banner image' }) {
  return (
    <div className={`pt-20 px-[12%] pb-28 lg:pb-36 flex flex-col lg:flex-row items-start justify-start ${waves ? 'gap-40' : 'gap-4'}`}>
      {description && (
        <p className=" lg:max-w-[70%] text-gray-500 leading-tight">
          {description}
        </p>
      )}

      {text && (
        <p className={`${customText}`}>
          {text}
        </p>
      )}
      {imgSrc && <img src={imgSrc} alt={altText} />}

      {vidSrc && <video src={vidSrc} controls className="w-full"></video>}


      {button && (
        <Button
          name={button.name}
          link={button.link}
          className={button.className}
        />
      )}
      {waves &&(
        <Waves
        lineColor="#47d7ac"
        backgroundColor="rgba(255, 255, 255, 0.1)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={50}
        waveAmpY={50}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
      )}
    </div>
  );
}

export default Banner;
