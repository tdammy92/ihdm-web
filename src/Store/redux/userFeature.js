import { createSlice } from '@reduxjs/toolkit'




const initialState = {
 userDetails:{

 },
 token :'',
 isLoggedIn:false
}

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    addUser: (state,action) => {
      const {newUser,newToken } = action.payload
      state.userDetails = newUser;
      state.token = newToken;
      state.isLoggedIn=true
    
    },
    removeUser: (state) => {
      state.userDetails = {};
      state.token = '';
      state.isLoggedIn=false
    },
  
  },
})

// Action creators are generated for each case reducer function
export const { addUser, removeUser } = userSlice.actions

export default userSlice.reducer