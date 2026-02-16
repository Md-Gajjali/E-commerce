import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  cart: JSON.parse(localStorage.getItem('cartItems')) || [],
  Wishlist: JSON.parse(localStorage.getItem('WishlistItems')) || [] ,
}

export const ProductSlice = createSlice({
  name: 'value',
  initialState,
  reducers: {
    GetProducts:(state,action)=>{
        state.value = action.payload
    },
    FilterReducer:(state,action)=>{
        state.value = action.payload
    },
    CartReducer:(state,action)=>{
        state.cart = [...state.cart , action.payload]
        localStorage.setItem('cartItems', JSON.stringify(state.cart))
    },
    WishlistReducer:(state,action)=>{
        state.Wishlist = [...state.Wishlist, action.payload]
        localStorage.setItem('WishlistItems',JSON.stringify(state.Wishlist))
    },
    RemoveReducer:(state,action)=>{
       state.cart = state.cart.filter((item)=> item.id !== action.payload)
       localStorage.setItem('cartItems', JSON.stringify(state.cart))
    },
    WishlistRemoveReducer:(state,action)=>{
       state.Wishlist = state.Wishlist.filter((item)=> item.id !== action.payload)
      localStorage.setItem('WishlistItems',JSON.stringify(state.Wishlist))

    },
  },
})

export const { GetProducts,FilterReducer,RemoveReducer,WishlistRemoveReducer ,CartReducer , WishlistReducer } = ProductSlice.actions

export default ProductSlice.reducer





