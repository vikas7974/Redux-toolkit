import {createSlice} from "@reduxjs/toolkit"

const users=createSlice({
    name: "viks",
    initialState:[],
    reducers:{
        add(state,action){
            state.push(action.payload)
            console.log(action.payload)
        },
        remove(state,action){
            state.splice(action.payload,1)
        },
        clearAll(state,action){
            return []
        }
    }
})

export default users.reducer
export const {add,remove,clearAll}=users.actions