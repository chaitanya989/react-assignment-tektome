import { createSlice } from '@reduxjs/toolkit';
import { get } from 'http';


export type UserList = {
  list: User[]
}

export interface User {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Geo {
  lat: string
  lng: string
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}


const initialState: UserList = {
  list: []
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setUsers } = userSlice.actions;
export const selectUsers = (state: { user: UserList }) => state.user.list;

export const selectUserById = (state: { user: UserList }, userId: number) =>
  state.user.list.find(user => user.id === userId);

export const selectUserByName = (state: { user: UserList }) => state.user.list[0].name

export default userSlice.reducer;
