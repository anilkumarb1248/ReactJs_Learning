
//import redux from 'redux' //ES6 import syntax. If it is react application
const redux = require('redux') // If it is simple node js application, use require() syntax.
const createStore = redux.createStore
//createStore is marked as @deprecated and recommend using the configureStore 
// method of the @reduxjs/toolkit package, which replaces createStore.

// Importing bindActionCreators helper function from redux
const bindActionCreators = redux.bindActionCreators

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED"

function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1,
    }
}

function restockCacke(quantity = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: quantity
    }
}

// (previousState, action) => newState
const initialState = {
    numberOfCackes: 10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCackes: state.numberOfCackes - 1
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numberOfCackes: state.numberOfCackes + action.payload
            }
        default:
            return state
    }
}

const store = createStore(reducer)
console.log("Initial state: ", store.getState())

const unsubscribe = store.subscribe(() => {
    console.log("Updated state: ", store.getState())
})

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())

// store.dispatch(restockCacke(3))

// Binding action creators to helper function
const actions = bindActionCreators({ orderCake, restockCacke }, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCacke(3)

unsubscribe() // Unsubscibing any changes in the store
console.log("Performing action after unsubscribing")
store.dispatch(orderCake())
console.log("We did not get any udates from store.")

