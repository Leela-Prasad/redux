import customStore from "./customStore";
import * as actions from "./actions"

customStore.state = []
console.log(customStore);

customStore.subscribe(() => console.log("Store Changed", customStore.getState()))

customStore.dispatch(actions.bugAdded("Bugg1"))
console.log(customStore.getState());