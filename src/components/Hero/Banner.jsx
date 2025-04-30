import React from 'react'
import Button from "../../utils/Button";

function Banner({description='' , customText='', button, text='', imgSrc='', vidSrc=''}) {
  return (
<div className=" pt-20 pb-28 lg:pb-36 flex flex-col gap-4 items-start justify-center">
          <p className="px-[12%] lg:max-w-[70%] text-gray-500 leading-tight ">
            {description}
          </p>
          <img src={imgSrc} alt="" />
          <video src={vidSrc}></video>
          <p className={`${customText}`}>{text}</p>

          {button && (
            <Button
              name={button.name}
              link={button.link}
              className={button.className}
            />
          )} 
        </div>  )
}

export default Banner