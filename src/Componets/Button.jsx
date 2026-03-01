import React, { children } from 'react'

const Button = ({children, className,onclick}) => {
  return (
    <div className={`${className} text-white flex  items-center rounded-sm py-4 px-12 cursor-pointer font-pop font-medium text-[16px] `} onClick={onclick}>
      {children}
    </div>
  )
}

export default Button
