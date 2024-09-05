import configureAppStore from "./store/configureStore";
import * as actions from "./store/bugs"

const store = configureAppStore()

store.state = []
// console.log(store);

store.subscribe(() => console.log("Store Changed", store.getState()))

store.dispatch(actions.bugAdded({description: "Bug1"}))
store.dispatch(actions.bugAdded({description: "Bug2"}))
store.dispatch(actions.bugAdded({description: "Bug3"}))
store.dispatch(actions.bugRemoved({id: 3}))
store.dispatch(actions.bugResolved({id: 1}))
// console.log(store.getState());