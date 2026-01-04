import React from 'react'

const Button = ({children, className}) => {
  return (
    <div className={` text-white rounded-sm py-4 px-12 font-pop font-medium text-[16px] ${className}`}>
      {children}
    </div>
  )
}

export default Button
