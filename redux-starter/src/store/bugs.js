import { createAction, createReducer } from "@reduxjs/toolkit";

// Action Creators
// bugAdded is a function which returns object with type "bugAdded" and payload with undefined
// to form the payload we have to pass object or primitive to this function 
// bugAdded -> {type: "bugAdded", payload: undefined}
// bugAdded({description: "Bug 1"}) -> {type: "bugAdded", payload: {description: "Bug 1"}}
export const bugAdded = createAction("bugAdded")
export const bugRemoved = createAction("bugRemoved")
export const bugResolved = createAction("bugResolved")

// Reducer
let lastId = 0;

export default createReducer([], {
    //key: value
    //action: functions similar to event => event handler

    [bugAdded.type] : (bugs, action) => {
        //Here we are mutating just like a javascript way
        //but behind the scenes it uses Immer to create an Immutable object
        bugs.push({
            id: ++lastId,
            description: action.payload.description,
            resolved: false
        })
    },

    [bugRemoved.type]: (bugs, action) => {
        const index = bugs.findIndex(bug => bug.id === action.payload.id)
        bugs.splice(index, 1)
    },

    [bugResolved.type]: (bugs, action) => {
        const index = bugs.findIndex(bug => bug.id === action.payload.id)
        bugs[index].resolved = true
    }
})