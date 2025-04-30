import React from 'react'
import heroThread from "../../assets/heroThread.png";


function Upperside( {area, title}) {
  return (
<div className="relative flex flex-col pt-32 pb-16 lg:pb-28 gap-8 items-start justify-center bg-[#13294b] px-[8%]">
          <h3 className="text-[#47d7ac] text-lg lg:text-3xl">{area}</h3>
          <h1 className="text-white text-2xl lg:text-6xl lg:max-w-[62%]">{title}</h1>
          <div className="absolute  flex items-center justify-end -top-10 lg:top-[50%] left-[35%] lg:left-[50%]  w-1/2 lg:w-1/3 h-full">
            <img src={heroThread} alt="thread" />
          </div>
        </div>  )
}

export default Upperside