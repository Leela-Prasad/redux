import store from "./store"
import * as actions from "./actionTypes"

console.log(store);
console.log(store.getState());

const unsubscribe = store.subscribe(() => {
    console.log("Store Changed!", store.getState());
    
})

store.dispatch({
    type: actions.BUG_ADDED,
    payload: {
        description: "Bug1"
    }
})

console.log(store.getState());

unsubscribe();

store.dispatch({
    type: actions.BUG_REMOVED,
    payload: {
        id: 1
    }
})

console.log(store.getState());
