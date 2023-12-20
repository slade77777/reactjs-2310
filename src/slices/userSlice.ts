import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {User} from "../page/Home.tsx";
import {instance} from "../axios-instance.ts";

export interface UserState {
  users: User[]
}

const initialState: UserState = {
  users: [],
}

export const getListUser = createAsyncThunk(
  'user/fetchUserList',
  async () => {
    const response = await instance.get('/user')
    return response.data
  }
)

export const addUser = createAsyncThunk(
  'add/fetchUserList',
  async (newUser: User) => {
    await instance.post('/user', newUser)
    const response = await instance.get('/user')
    return response.data
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getListUser.fulfilled, (state, action: PayloadAction<User[]>) => {
      state.users = action.payload
    })
    builder.addCase(addUser.fulfilled, (state, action: PayloadAction<User[]>) => {
      state.users = action.payload
    })
  }
})

export const {} = userSlice.actions;
export default userSlice.reducer
