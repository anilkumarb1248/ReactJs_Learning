const { cakeActions } = require('../cake/cakeSlice')

const createSlice = require('@reduxjs/toolkit').createSlice

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
    //This approach is removed. So we need to use builder only. 
    // Error: The object notation for `createSlice.extraReducers` has been removed. 
    // Please use the 'builder callback' notation instead
    // extraReducers: { 
    //     ['cake/ordered']: (state, action) => {
    //         state.numberOfIceCreams--
    //     }
    // }
    extraReducers: (builder) =>{
        builder.addCase(cakeActions.ordered, (state, action)=>{
            // When a cake is ordered, decrement the number of ice creams
            state.numberOfIceCreams--
        })
    }
})

module.exports = icecreamSlice.reducer // Defulat export
module.exports.icecreamActions = icecreamSlice.actions // Named Export