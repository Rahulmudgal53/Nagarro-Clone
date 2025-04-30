import React from 'react'
import { Link } from 'react-router-dom'
import naglogoBlack from '../assets/naglogoBlack.png'
import naglogoWhite from '../assets/naglogoWhite.png'
function NagarroLogo({className , isSticky} ) {
  return (
    <div className="flex items-center justify-start flex-shrink-0">
                        <Link to="/">
                        {isSticky ? 
                          <img className={`h-50 w-40 ${className}`} src={naglogoBlack} alt="Logo-img" />
                          :
                          <img className={`h-50 w-40 ${className}`} src={naglogoWhite} alt="Logo-img" />
}
                        </Link>
                    </div>
  )
}

export default NagarroLogo