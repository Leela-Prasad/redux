let lastId = 0;

export default function reducer(state = [], dispatch) {

    if(dispatch.type === "bugAdded") {
        return [
            ...state,
            {
                id: ++lastId,
                description: dispatch.payload.description,
                resolved: false
            }
        ]
    } else if(dispatch.type === "bugRemoved") {
        return state.filter(bug => bug.id !== dispatch.payload.id)
    } 

    return state;
}