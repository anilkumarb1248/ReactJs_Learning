

//import redux from 'redux' //ES6 import syntax. If it is react application
const redux = require('redux') // If it is simple node js application, use require() syntax.
const createStore = redux.createStore
//createStore is marked as @deprecated and recommend using the configureStore 
// method of the @reduxjs/toolkit package, which replaces createStore.

// Importing bindActionCreators helper function from redux
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers

const applyMiddleware = redux.applyMiddleware

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1,
    }
}

function restockCake(quantity = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: quantity
    }
}

function orderIceCream(quantity = 1) {
    return {
        type: ICECREAM_ORDERED,
        payload: quantity
    }
}

function restockIceCream(quantity = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: quantity
    }
}


// (previousState, action) => newState
const cakeInitialState = {
    numberOfCakes: 10
}

const iceCreamInitialState = {
    numberOfIceCreams: 20
}

const cakeReducer = (state = cakeInitialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes + action.payload
            }
        default:
            return state
    }
}

const iceCreamReducer = (state = iceCreamInitialState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams - action.payload
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams + action.payload
            }
        default:
            return state
    }
}

// --- Single Reducer
// const store = createStore(reducer) 
// -- Multipe Reducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))


console.log("Initial state: ", store.getState())

const unsubscribe = store.subscribe(() => {
    //     console.log("Updated state: ", store.getState())
})

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())

// store.dispatch(restockCacke(3))

// Binding action creators to helper function
const actions = bindActionCreators({ orderCake, restockCake, orderIceCream, restockIceCream }, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3)
actions.orderIceCream(2)
actions.orderIceCream(2)

console.log("Number of cakes avaiable: ", store.getState().cake.numberOfCakes);
console.log("Number of Icecreams avaialbe: ", store.getState().iceCream.numberOfIceCreams);

actions.restockIceCream(4)

unsubscribe()
