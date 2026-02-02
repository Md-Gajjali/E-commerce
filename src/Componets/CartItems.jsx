import React from 'react'
import Flex from './Flex'


const CartItems = ({ImgSrc,productName,price,Quantity,subtotal ,className}) => {
  return (
      <div className={`${className} w-full   flex justify-between items-center px-10 py-6 border-[#F2F4F7] rounded-sm  shadow-[inset_0px_2px_4px_0px_rgba(184,196,243,0.14),0px_3px_10px_0px_rgba(16,24,40,0.1)]`}>
        <div className='flex items-center '>
            <img src={ImgSrc} alt="" />
            <h3 className='font-normal font-pop text-[16px] '>{productName}</h3>
        </div>
        <h3 className='font-normal font-pop text-[16px] '>{price}</h3>
        <h4 className='font-normal font-pop text-[16px] '>{Quantity}</h4>
        <h4 className='font-normal font-pop text-[16px] '>{subtotal}</h4>
      </div>
  )
}

export default CartItems
