import configureStore from "./store/configureStore";
import * as actions from "./store/bugs"

const store = configureStore()

store.state = []
console.log(store);

store.subscribe(() => console.log("Store Changed", store.getState()))

store.dispatch(actions.bugAdded("Bug1"))
store.dispatch(actions.bugAdded("Bug2"))
store.dispatch(actions.bugAdded("Bug3"))
store.dispatch(actions.bugResolved(1))
console.log(store.getState());