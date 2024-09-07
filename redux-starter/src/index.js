import configureAppStore from "./store/configureStore";

const store = configureAppStore()
store.state = []

// store.dispatch((dispatch, getState) => {
//     // Call an API
//     // When the promise is resolved => dispatch(result)
//     // If the promise is rejected => dispatch(error)
//     dispatch({type: "bugsReceived", bugs: [1, 2, 3]})
// })

// store.dispatch({
//     type: "error",
//     payload: {
//         message: "An error occurred"
//     }
// })

store.dispatch({
    type: "apiCallBegan",
    payload: {
        url: "/bugs",
        onSuccess: "bugsReceived",
        onError: "apiRequestFailed"
    }
})

