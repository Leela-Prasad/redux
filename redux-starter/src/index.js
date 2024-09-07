import { loadBugs } from "./store/bugs";
import configureAppStore from "./store/configureStore";

const store = configureAppStore()
store.state = []

store.dispatch(loadBugs())

