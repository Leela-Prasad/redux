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
    } 

    return state;
}