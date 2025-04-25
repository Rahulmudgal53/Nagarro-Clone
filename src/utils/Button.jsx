import React from 'react'
import { twMerge } from "tailwind-merge";

import { Link } from 'react-router-dom'

const Button = ({ name, className = "", link = "#" }) => {
  const baseClass =
    "bg-teal-400 text-center rounded-full mx-0 py-2 px-16 ";
  return (
    <Link to={link}  className={twMerge(baseClass, className)}>
          {name}
        </Link>
  )
}

export default Button