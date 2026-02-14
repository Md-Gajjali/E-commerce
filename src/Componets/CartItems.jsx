import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { RemoveReducer } from '../ProductSlice';


const CartItems = ({ImgSrc,productName,price,subtotal ,className}) => {

  const data = useSelector((state) => state.AllProducts.cart)


  
  const dispatch = useDispatch()

  function handleRemove () {
    dispatch(RemoveReducer(data))
    console.log(RemoveReducer(data))
  }

  return (
      <div className={`${className} w-full mt-10  flex justify-between items-center px-10 py-6 border-[#F2F4F7] rounded-sm  shadow-[inset_0px_2px_4px_0px_rgba(184,196,243,0.14),0px_3px_10px_0px_rgba(16,24,40,0.1)]`}>
        <div className='flex items-center gap-10  w-60'>
          <div className='relative'>
            <img src={ImgSrc} alt="" className='cursor-pointer w-13.5 border-none '/>
          <span  className='absolute z-100 top-0 left-0 bg-primary w-5 h-5 rounded-2xl cursor-pointer   flex justify-center items-center text-white' onClick={handleRemove} ><RxCross2 /></span>
          </div>
            <h3 className='font-normal font-pop text-[16px] w-50'>{productName}</h3>
        </div>
        <h3 className='font-normal font-pop text-[16px] '>${price}</h3>
        <input type="number" min={1} max={99} step={1} className='w-18 h-11 py-1.5 px-3 rounded-sm border-[#929395] border-2' />
        <h4 className='font-normal font-pop text-[16px] '>${subtotal}</h4>
      </div>
  )
}

export default CartItems
