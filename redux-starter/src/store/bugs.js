import { createAction, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";

let lastId = 0;

const slice = createSlice({
    name: "bugs",
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers: {
        //actions => action handlers
        bugAdded: (bugs, action) => {
            bugs.list.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            })
        },
        bugRemoved: (bugs, action) => {
            const index = bugs.list.findIndex(bug => bug.id === action.payload.id)
            bugs.list.splice(index, 1)
        },
        bugResolved: (bugs, action) => {
            const index = bugs.list.findIndex(bug => bug.id === action.payload.id)
            bugs.list[index].resolved = true
        },
        bugAssignedToUser: (bugs, action) => {
            const {bugId, userId} = action.payload;
            const index = bugs.list.findIndex(bug => bug.id === bugId)
            bugs.list[index].userId = userId
        },
        bugsRequested: (bugs, action) => {
            bugs.loading = true
        },
        bugsReceived: (bugs, action) => {
            bugs.list = action.payload
            bugs.loading = false
        },
        bugsRequestFailed: (bugs, action) => {
            bugs.loading = false
        }
    }
})

// console.log(slice);

export const {bugAdded, bugRemoved, bugResolved, bugAssignedToUser, bugsRequested, bugsReceived, bugsRequestFailed} = slice.actions
export default slice.reducer

//Action Creator
export const loadBugs = () => apiCallBegan({
    url: "/bugs",
    onStart: bugsRequested.type,
    onSuccess: bugsReceived.type,
    onError: bugsRequestFailed.type
})


//Selectors
// export const getUnresolvedBugs = state => state.entities.bugs.filter(bug => !bug.resolved)

export const getUnresolvedBugs = createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => !bug.resolved)
)

export const getBugsByUserId = userId => createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => bug.userId === userId)
)