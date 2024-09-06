import configureAppStore from "./store/configureStore";

const store = configureAppStore()
store.state = []

store.dispatch((dispatch, getState) => {
    // Call an API
    // When the promise is resolved => dispatch(result)
    // If the promise is rejected => dispatch(error)
    dispatch({type: "bugsReceived", bugs: [1, 2, 3]})
})

