import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { DecrementReducer, IncrementReducer, RemoveReducer } from '../ProductSlice';
import {  toast ,Bounce} from 'react-toastify';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";



const CartItems = ({ ImgSrc, productName, price, subtotal, className, id ,count,quantity}) => {

  const [counted,setCounted] = useState(0)

  const notify = () => toast.error('removed', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });

  const dispatch = useDispatch()

  function handleRemove() {
    dispatch(RemoveReducer(id))
    notify()
  }

  const  handleIncre =() =>{
      dispatch(IncrementReducer(id))
  }

  const handleDecre = () => {
    dispatch(DecrementReducer(id))
  }
  

  return (
    <div className={`${className} w-full mt-10  flex justify-between items-center px-10 py-6 border-[#F2F4F7] rounded-sm  shadow-[inset_0px_2px_4px_0px_rgba(184,196,243,0.14),0px_3px_10px_0px_rgba(16,24,40,0.1)]`}>
      <div className='flex items-center gap-10  w-60'>
        <div className='relative'>
          <img src={ImgSrc} alt="" className='cursor-pointer w-13.5 border-none ' />
          <span className='absolute z-100 top-0 left-0 bg-primary w-5 h-5 rounded-2xl cursor-pointer   flex justify-center items-center text-white' onClick={handleRemove} ><RxCross2 /></span>
        </div>
        <h3 className='font-normal font-pop text-[16px] w-50'>{productName}</h3>
      </div>
      <h3 className='font-normal font-pop text-[16px] '>${price}</h3>
      <div className='flex items-center py-2 px-5 gap-2 border'>
        {quantity}
        <div className='grid '>
          <IoIosArrowUp  className='block' onClick={handleIncre}/>
          <IoIosArrowDown className='block'onClick={handleDecre}/>
        </div>
      </div>
      <h4 className='font-normal font-pop text-[16px] '>${subtotal}</h4>
    </div>
  )
}

export default CartItems
