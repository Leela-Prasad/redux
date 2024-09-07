import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
import moment from "moment";

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
            bugs.list.push(action.payload)
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
            const {id: bugId, userId} = action.payload;
            const index = bugs.list.findIndex(bug => bug.id === bugId)
            bugs.list[index].userId = userId
        },
        bugsRequested: (bugs, action) => {
            bugs.loading = true
        },
        bugsReceived: (bugs, action) => {
            bugs.list = action.payload
            bugs.loading = false
            bugs.lastFetch = Date.now()
        },
        bugsRequestFailed: (bugs, action) => {
            bugs.loading = false
        }
    }
})

// console.log(slice);

const {bugAdded, bugRemoved, bugResolved, bugAssignedToUser, bugsRequested, bugsReceived, bugsRequestFailed} = slice.actions
export default slice.reducer

//Action Creator
const url = "/bugs"
export const loadBugs = () => (dispatch, getState) => {
    const lastFetch = getState().entities.bugs.lastFetch 
    
    const diffInMinutes = moment().diff(moment(lastFetch), "minutes")
    if(diffInMinutes < 10)
        return;
    
    dispatch(
        apiCallBegan({
            url,
            onStart: bugsRequested.type,
            onSuccess: bugsReceived.type,
            onError: bugsRequestFailed.type
        })
    )
}

export const addBug = bug => apiCallBegan({
    url,
    method: "post",
    data: bug,
    onSuccess: bugAdded.type
})

export const resolveBug = id => apiCallBegan({
    url: url + "/" + id,
    method: "patch",
    data: {resolved: true},
    onSuccess: bugResolved.type
})

export const assignBug = (bugId, userId) => apiCallBegan({
    url: url + "/" + bugId,
    method: "patch",
    data: {userId},
    onSuccess: bugAssignedToUser.type
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