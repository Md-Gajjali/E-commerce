import React from 'react'

const DeliveryCards = ({title,heading,className ,imgSrc}) => {
  return (
    <div className={`${className} w-62.25  `}>
       <img src={imgSrc} alt="" className=' '/>
       <h3 className='font-pop font-semibold text-[20px] mt-6 '>{title}</h3>
       <p className='font-pop font-normal text-[14px] mt-2'>{heading}</p>
    </div>
  )
}

export default DeliveryCards
