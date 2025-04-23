import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({name, className, link}) => {
  return (
    <Link to={link} className={`bg-teal-400 text-center rounded-full w-36 mx-0 py-2 px-3  font-semibold ${className} `}>
          {name}
        </Link>
  )
}

export default Button