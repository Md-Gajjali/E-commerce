import React from 'react'
import Container from '../Componets/Container'
import Breadcrumb from '../Componets/Breadcrumb'
import CartItems from '../Componets/CartItems'

const Cart = () => {
  return (
    <div>
      <Container>
        <Breadcrumb className='py-20'/>
        <CartItems 
         productName='Product'
         price='price'
         Quantity='Quantity'
         subtotal='Subtotal'
        />
      </Container>
    </div>
  )
}

export default Cart
