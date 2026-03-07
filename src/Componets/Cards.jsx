import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import Flex from './Flex';
import { Rate } from 'antd';
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { CartReducer, RemoveReducer, SubTotalReducer, WishlistReducer, WishlistRemoveReducer } from '../ProductSlice';
import { toast, Bounce ,Flip} from 'react-toastify';
import { FaHeart } from "react-icons/fa6";



const Cards = ({ ImgSrc, title, discountPrice, disRating, Delete, disEye, disHeart, disReview, DisParcentge, price, Review, btn, disHidden, productDetails, rating, id }) => {

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [change,setChange]= useState(false)
  const CartProduct = useSelector((state) => state.AllProducts.cart)
  const Whishlist = useSelector((state) => state.AllProducts.Wishlist)

  const notify = (matchItem) => { 

    matchItem == undefined ?
    toast.success('Add to Cart', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    })
     :
      toast.warn('Your product has been already added ', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Flip
    });


  }



  const notify2 = () => toast.error('Removed', {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });

  const handleProductDetails = () => {
    navigate(`/ProductDetails/${id}`)
  }

  // const handleAddToCart = () => {
  //   const matchItem = CartProduct.find((item) => item.id === productDetails.id)
  //   if (!matchItem) {
  //     dispatch(CartReducer({...productDetails, quan: 1}))
  //    notify()
  //   } else {
  //     notify(matchItem)
  //   } 
  // }

  const handleAddToCart = () => {
    const matchItem = CartProduct.find((item) => item.id === productDetails.id)
    if (!matchItem) {
      dispatch(CartReducer({...productDetails , quan: 1}))
      dispatch(SubTotalReducer())
    }
    notify(matchItem)
  }



  const handleWishlist = () => {
    const matchItem = Whishlist.find((item) => item.id === productDetails.id)
    if (!matchItem) {
      dispatch(WishlistReducer(productDetails))
    } 
    setChange(!change)
      notify(matchItem)
  }

  

  const handleRemove = () => {
    dispatch(WishlistRemoveReducer(id))
    notify2()
  }




  return (
    <>
      <div className='w-67.5 mt-10 group -z-20' >
        <div className='relative overflow-hidden '>
          <img src={ImgSrc} alt="" className='cursor-pointer  ' onClick={handleProductDetails} />
          <div className='discount'>
            <h3 className={`absolute top-3 left-3 py-1 px-3 mt-4  bg-primary 
              text-xs text-white rounded-sm  ${disHidden}`}>-{DisParcentge}</h3>
            <div className='absolute top-3 right-3 flex flex-col gap-y-4 py-3'>
              {
                change ?<div className={`${disHeart} h-8.5  w-8.5 bg-white rounded-full flex justify-center items-center p-1.25`}>
                <FaHeart  className=' text-2xl  cursor-pointer' onClick={handleWishlist} />
              </div>   :  <div className={`${disHeart} h-8.5  w-8.5 bg-white rounded-full flex justify-center items-center p-1.25`}>
                <FaRegHeart className=' text-2xl  cursor-pointer' onClick={handleWishlist} />
              </div>
              }
             
              <div className={`h-8.5  w-8.5 bg-white rounded-full flex justify-center cursor-pointer items-center p-1.25 `}>
                <FiEye className={`${disEye}  text-2xl  `} /> <span onClick={handleRemove} className='cursor-pointer text-2xl  '>{Delete}</span>
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
          <Flex className={`${disRating} mt-2 text-[#FFAD33] `}>
            <Rate allowHalf defaultValue={rating} />
          </Flex>
          <h5 className={`${disReview} pl-2 text-[#7D8184]`}>({Review})</h5>
        </Flex>
      </div>
    </>
  )
}

export default Cards
