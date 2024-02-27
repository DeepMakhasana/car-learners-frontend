import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type UserData = {
  id: number;
  email: string;
  name: string;
  photo: string;
};

export interface IAuthState {
  authState: boolean;
  userData: UserData;
}

const initialState: IAuthState = {
  authState: false,
  userData: {
    id: 0,
    email: "",
    name: "",
    photo: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<UserData>) => {
      state.authState = true;
      state.userData = action.payload;
    },

    removeAuthState: (state, action) => {
      state.authState = false;
      state.userData = initialState.userData;
    },
  },
});

export const { setAuthState, removeAuthState } = authSlice.actions;

export default authSlice.reducer;
