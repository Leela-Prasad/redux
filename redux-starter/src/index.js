import configureAppStore from "./store/configureStore";
import { projectAdded } from "./store/projects";
import {bugAdded, bugRemoved, bugResolved, getUnresolvedBugs} from "./store/bugs"

const store = configureAppStore()

store.state = []
// console.log(store);

store.subscribe(() => console.log("Store Changed", store.getState()))

store.dispatch(bugAdded({description: "Bug1"}))
store.dispatch(bugAdded({description: "Bug2"}))
store.dispatch(bugAdded({description: "Bug3"}))
// store.dispatch(bugRemoved({id: 3}))
store.dispatch(bugResolved({id: 1}))

store.dispatch(projectAdded({name: "Project 1"}))

const x = getUnresolvedBugs(store.getState())
const y = getUnresolvedBugs(store.getState())

console.log(x === y);
