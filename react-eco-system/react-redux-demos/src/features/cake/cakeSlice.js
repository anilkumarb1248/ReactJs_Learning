
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    numberOfCakes: 10
}
const cakeSlice = createSlice({
    name: 'cake',
    initialState, // ES6 short hand if both key & value are the same.
    reducers: {
        ordered: (state) => {
            state.numberOfCakes--
        },
        restocked: (state, action) => {
            state.numberOfCakes = state.numberOfCakes + action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { ordered, restocked } = cakeSlice.actions // Named Export
export default cakeSlice.reducer