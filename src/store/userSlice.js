import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
  },
  reducers:{
    setData:(state, action)=> {
        state.status=true;
        state.userData=action.payload;
    } 
  }
});

export const  {setData}=userSlice.actions
export default userSlice.reducer