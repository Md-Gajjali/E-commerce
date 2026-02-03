import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  cart: [] ,
  Wishlist: [] ,
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
    },
    WishlistReducer:(state,action)=>{
        state.Wishlist = [...state.Wishlist, action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { GetProducts,FilterReducer ,CartReducer , WishlistReducer } = ProductSlice.actions

export default ProductSlice.reducer