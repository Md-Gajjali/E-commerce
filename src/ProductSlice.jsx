
var a = 1233;

import { createSlice} from '@reduxjs/toolkit'

const initialState = {
  value: [],
  cat: [],
  cart: JSON.parse(localStorage.getItem('cartItems')) || [],
  Wishlist: JSON.parse(localStorage.getItem('WishlistItems')) || [] ,
  subTotal: 0,
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
    CetegoryReducer:(state,action)=>{
        state.cat =  action.payload
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
    IncrementReducer:(state,action) => {
      state.cart = state.cart.map((item)=>{
        return item.id == action.payload ? {...item, quan: item.quan + 1} : item 
      })
      localStorage.setItem("cartItems", JSON.stringify(state.cart))
    },
    DecrementReducer: (state, action)=> {
      state.cart = state.cart.map((item)=>{
        return item.id == action.payload ? {...item, quan: item.quan -1 } : item        
      })
      localStorage.setItem("cartItems", JSON.stringify(state.cart))
    },
    SubTotalReducer: (state,)=> {
      state.subTotal = state.cart.reduce((current,item)=> current + (item.quan * item.price),0)
    }
  },
})

export const { GetProducts,SubTotalReducer,DecrementReducer,CetegoryReducer,IncrementReducer,FilterReducer,RemoveReducer,WishlistRemoveReducer ,CartReducer , WishlistReducer } = ProductSlice.actions

export default ProductSlice.reducer





