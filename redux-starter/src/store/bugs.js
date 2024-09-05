import { createAction } from "@reduxjs/toolkit";

// Action Creators
export const bugAdded = createAction("bugAdded")
// bugAdded is a function which returns object with type "bugAdded" and payload with undefined
// to form the payload we have to pass object or primitive to this function 
// bugAdded -> {type: "bugAdded", payload: undefined}
// bugAdded({description: "Bug 1"}) -> {type: "bugAdded", payload: {description: "Bug 1"}}

export const bugRemoved = createAction("bugRemoved")
export const bugResolved = createAction("bugResolved")

// Reducer
let lastId = 0;

export default function reducer(state = [], dispatch) {

    if(dispatch.type === bugAdded.type) {
        return [
            ...state,
            {
                id: ++lastId,
                description: dispatch.payload.description,
                resolved: false
            }
        ]
    } else if(dispatch.type === bugRemoved.type) {
        return state.filter(bug => bug.id !== dispatch.payload.id)
    } else if(dispatch.type === bugResolved.type) {
        return state.map(bug => bug.id === dispatch.payload.id? {...bug, resolved: true}: bug)
    }

    return state;
}