import { addBug, assignBug, loadBugs, resolveBug } from "./store/bugs";
import configureAppStore from "./store/configureStore";

const store = configureAppStore()
store.state = []

// store.dispatch(addBug({description: "Bugg 1"}))

store.dispatch(loadBugs())

setTimeout(() => store.dispatch(resolveBug(2)), 2000)
// setTimeout(() => store.dispatch(assignBug(1, 2)), 2000)
