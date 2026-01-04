import React from 'react'

const CardTwo = ({imgSrc,title, className}) => {
  return (
    <div className={`w-42.25 border-2  hover:bg-primary hover:text-white ease-linear duration-300 border-[#0000002c] rounded-sm py-6.25 px-14.25 ${className}`}>
        <img src={imgSrc} alt=""  />
        <h3 className='font-pop font-normal  text-[16px] py-4 '>{title}</h3>
    </div>
  )
}

export default CardTwo
