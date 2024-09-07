import { loadBugs } from "./store/bugs";
import configureAppStore from "./store/configureStore";

const store = configureAppStore()
store.state = []

store.dispatch(loadBugs())

setTimeout(() =>store.dispatch(loadBugs()), 2000)