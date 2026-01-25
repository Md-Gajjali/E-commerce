import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [ ],
}

export const ProductSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    GetProducts:(state,action)=>{
        state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { GetProducts } = ProductSlice.actions

export default ProductSlice.reducer