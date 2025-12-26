
import { configureStore } from "@reduxjs/toolkit"
import cakeReducer from "../features/cake/cakeSlice"
import icecreamReducer from "../features/icecream/icecreamSlice"
import userReducer  from "../features/user/userSlice"

const store = configureStore({
    reducer: {
        // Add all your slice reducers here
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer
    },
    // Middleware, devTools, etc., are configured automatically
})

export default store;