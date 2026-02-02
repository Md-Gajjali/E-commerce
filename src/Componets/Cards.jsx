import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import Flex from './Flex';
import { Rate } from 'antd';
import { useNavigate } from "react-router";
import { useDispatch } from 'react-redux';
import { CartReducer } from '../ProductSlice';



const Cards = ({ ImgSrc, title, discountPrice, DisParcentge, price, Review, btn, disHidden,productDetails ,rating , id }) => {
  
  let navigate = useNavigate();
  const handleProductDetails = () => {
    navigate(`/ProductDetails/${id}`)
  }
  console.log(productDetails)

   const dispatch = useDispatch()
  const handleAddToCart = () => {
    dispatch(CartReducer(productDetails))
  }

  return (
    <>
      <div className='w-67.5 mt-10 group ' >
        <div className='relative overflow-hidden '>
          <img src={ImgSrc} alt="" className='cursor-pointer' onClick={handleProductDetails}/>
          <div className='discount'>
            <h3 className={`absolute top-3 left-3 py-1 px-3 mt-4  bg-primary 
              text-xs text-white rounded-sm  ${disHidden}`}>-{DisParcentge}</h3>
            <div className='absolute top-3 right-3 flex flex-col gap-y-4 py-3'>
              <div className=' h-8.5  w-8.5 bg-white rounded-full flex justify-center items-center p-1.25'>
                <FaRegHeart className='text-2xl ' />
              </div>
              <div className='h-8.5  w-8.5 bg-white rounded-full flex justify-center items-center p-1.25'>
                <FiEye className='text-2xl ' />
              </div>
            </div>
          </div>
          <button onClick={handleAddToCart} className='-bottom-10 group-hover:bottom-0 duration-300 ease-linear  absolute bg-black text-white block text-[16px] w-full py-2 px-20 font-pop  cursor-pointer '>{btn}</button>
        </div>

        <h2 className='py-4'>{title}</h2>
        <div className='flex items-center gap-2.5  '>
          <h3 className='text-primary'>${price}</h3>
          <h3 className=' line-through text-[#7D8184]'>${discountPrice}</h3>
        </div>
        <Flex className='items-center '>
          <Flex className='mt-2 text-[#FFAD33] '>
            <Rate allowHalf defaultValue={rating} />
          </Flex>
          <h5 className='pl-2 text-[#7D8184]'>({Review})</h5>
        </Flex>
      </div>
    </>
  )
}

export default Cards
