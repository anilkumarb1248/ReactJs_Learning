

const redux = require('redux')
// const { produce } = require('immer')
const produce = require('immer').produce

const userInitialState = {
    name: 'Anil',
    email: 'anil@gmail.com',
    address: {
        street: 'Indresham',
        district: 'Patancheru',
        city: 'Hyderabad',
        state: 'Telangana'
    }
}

// Here we need to update the street using Redux Pattern

const STREET_UPDATED = "STREET_UPDATED"

const updateStreet = (street) => {
    return {
        type: STREET_UPDATED,
        payload: street
    }
}

const reducer = (state = userInitialState, action) => {
    switch (action.type) {
        case STREET_UPDATED:
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload
            //     }
            // }
            return produce(state, (draft) =>{
                draft.address.street = action.payload
            })
        default: {
            return state
        }
    }
}

// const createStore = redux.createStore
// const store = createStore(reducer)
const store = redux.createStore(reducer)
console.log("User initial state: ", store.getState())
const unsubscribe = store.subscribe(() => {
    console.log("Updated user state: ", store.getState())
})
store.dispatch(updateStreet('Rameshwaram Banda'))
unsubscribe()