import { bugAdded, bugResolved } from "./actions"
import store from "./store"

console.log(store.getState());

store.dispatch(bugAdded())

console.log(store.getState());

// store.dispatch(bugRemoved(1))
store.dispatch(bugResolved(1));

console.log(store.getState());
