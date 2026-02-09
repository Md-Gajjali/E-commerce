import React from 'react'
import Container from '../Componets/Container'
import Breadcrumb from '../Componets/Breadcrumb'
import CartItems from '../Componets/CartItems'
import Flex from '../Componets/Flex'
import Button from '../Componets/Button'
import { useSelector } from 'react-redux'

const Cart = () => {
  const CartProduct = useSelector((state) => state.AllProducts.cart)


  return (
    <div>
      <Container>
        <Breadcrumb className='py-20' />
        <div className=' bg-white/5 w-full flex justify-between items-center px-10 py-6
            border border-[#F2F4F7] rounded-sm
            shadow-[inset_0px_2px_4px_rgba(184,196,243,0.25),0px_6px_16px_rgba(16,24,40,0.15)]'>
          <h3 className='font-normal font-pop text-[16px] w-60'>productName</h3>
          <h3 className='font-normal font-pop text-[16px] '>price</h3>
          <h4 className='font-normal font-pop text-[16px] '>Quantity</h4>
          <h4 className='font-normal font-pop text-[16px] '>subtotal</h4>
        </div>
        <div className=''>
            {CartProduct.length === 0 && <div className='text-3xl py-20 text-center  font-pop font-semibold'>Product not found🥹</div>}
          {
            CartProduct.map((item,idx) => {
              return (
                <CartItems
                  ImgSrc={item.thumbnail}
                  productName={item.title}
                  price={item.price}
                  subtotal={item.price}
                  key={idx}
                />
              )
            })
          }
        </div>
        <Flex className='justify-between mt-6'>
          <Button className='border text-black!'>Return To Shop</Button>
          <Button className='border text-black!'>Update Cart</Button>
        </Flex>
        <div className='mt-20 flex justify-between gap-43.25'>
          <Flex className='justify-between w-[45%] gap-4  '>
            <input type="text" placeholder='Coupon Code' className='py-4 px-6  h-13.25 rounded-sm w-70  border-[#929395] border-2' />
            <Button className='bg-primary w-52.75 h-14'>Apply Coupon</Button>
          </Flex>
          <div className='w-[50%] '>
            <div className='py-8 px-6 border-[#929395] border-2 w-117.5 rounded-sm'>
              <h2>Cart Total</h2>
              <Flex className='border-b-2 border-[#929395] mt-6 py-2 justify-between'>
                <p>Subtotal:</p>
                <p>$1750</p>
              </Flex>
              <Flex className='border-b-2 border-[#929395] mt-6 py-2 justify-between'>
                <p>Shipping::</p>
                <p>Free</p>
              </Flex>
              <Flex className='  mt-6  justify-between'>
                <p>Total:</p>
                <p>$1750</p>
              </Flex>
              <Button className='w-65 h-14 bg-primary mx-auto mt-4'  >Procees to checkout</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Cart
