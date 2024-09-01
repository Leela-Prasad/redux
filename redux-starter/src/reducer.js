import * as actions from "./actionTypes"

let lastId = 0;

export default function reducer(state = [], dispatch) {

    if(dispatch.type === actions.BUG_ADDED) {
        return [
            ...state,
            {
                id: ++lastId,
                description: dispatch.payload.description,
                resolved: false
            }
        ]
    } else if(dispatch.type === actions.BUG_REMOVED) {
        return state.filter(bug => bug.id !== dispatch.payload.id)
    } else if(dispatch.type === actions.BUG_RESOLVED) {
        return state.map(bug => bug.id === dispatch.payload.id? {...bug, resolved: true}: bug)
    }

    return state;
}