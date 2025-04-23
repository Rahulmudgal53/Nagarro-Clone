import React from 'react'
import { Link } from 'react-router-dom'
import naglogo from '../assets/naglogo.png'
function NagarroLogo({className} ) {
  return (
    <div className="flex items-center justify-start flex-shrink-0">
                        <Link to="/">
                        <img className={`h-50 w-40 ${className}`} src={naglogo} alt="Logo-img" />
                        </Link>
                    </div>
  )
}

export default NagarroLogo