
import {createSlice } from "@reduxjs/toolkit"
import { ordered as cakeOrdered } from "../cake/cakeSlice"

const initialState = {
    numberOfIceCreams: 20
}
const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numberOfIceCreams--
        },
        restocked: (state, action) => {
            state.numberOfIceCreams += action.payload
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(cakeOrdered, (state, action)=>{
            // When a cake is ordered, decrement the number of ice creams
            state.numberOfIceCreams--
        })
    }
})

// Action creators are generated for each case reducer function
export const { ordered, restocked } = icecreamSlice.actions // Named Exports
export default icecreamSlice.reducer // Default export