import { createSlice } from "@reduxjs/toolkit";
export interface User {
  username: string | null;
  firstName: string | null;
  email: string | null;
  profileImageURL: string | null;
  lastName: string | null;
}
const CurrentUser: User | null = {
  username: "aayushgelal",
  email: null,
  profileImageURL: null,
  firstName: null,
  lastName: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: CurrentUser,

  reducers: {
    logIn: (state: User, action) => {
      console.log(action.payload);
      return {
        username: action.payload.username,
        email: action.payload.email,
        profileImageURL: action.payload.profileURL,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    },
    logOut: (state: User, action) => {
      return {
        username: null,
        email: null,
        profileImageURL: null,
        firstName: null,
        lastName: null,
      };
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
