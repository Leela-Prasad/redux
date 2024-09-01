import { bugAdded } from "./actions"
import store from "./store"

console.log(store.getState());

store.dispatch(bugAdded())

console.log(store.getState());