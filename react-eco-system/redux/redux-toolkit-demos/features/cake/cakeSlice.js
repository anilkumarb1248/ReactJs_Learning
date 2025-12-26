
const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numberOfCakes: 10
}
const cakeSlice = createSlice({
    name: 'cake',
    // initialState: initialState, 
    initialState, // ES6 short hand if both key & value are the same.
    reducers: {
        ordered: (state) => {
            state.numberOfCakes--
        },
        restocked: (state, action) => {
            state.numberOfCakes += action.payload
        }
    }
})

module.exports = cakeSlice.reducer  // Defulat export
module.exports.cakeActions = cakeSlice.actions // Named Export
