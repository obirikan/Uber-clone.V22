import { createSlice } from "@reduxjs/toolkit";

const initialState={
     origin:null,
     destinaiton:null,
     traveltime:null
}

export const navSlice=createSlice({
    name:"nav",
    initialState,
    reducer:{
          setorigin:(state,action)=>{
            state.origin=action.payload
          },
          setdestination:(state,action)=>{
            state.destination=action.payload
          },
          settraveltime:(state,action)=>{
            state.traveltime=action.payload
          },
    }
})

export const {setorigin,setdestination,settraveltime}=navSlice.actions

//selectors
export const selectOrigins=(state)=>state.nav.origin
export const selectDestination=(state)=>state.nav.destinaiton
export const selectTraveltime=(state)=>state.nav.traveltime

export default navSlice.reducer