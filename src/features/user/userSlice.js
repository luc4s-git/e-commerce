import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const themes = {
  black: 'black',
  lofi: 'lofi',
};

const getThemeFromLocal = () => {
  const theme = localStorage.getItem('theme') || themes.lofi;
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};

const getUserFromLocal = () => {
  const user = JSON.parse(localStorage.getItem('user')) || null;
  return user;
};

const initialState = {
  user: getUserFromLocal(),
  theme: getThemeFromLocal(),
};

const userReducer = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = { ...action.payload.user, token: action.payload.jwt };
      console.log(state.user);
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem('user');
      toast.success('Logged out successfully');
    },
    toggleTheme: (state) => {
      const { black, lofi } = themes;
      state.theme = state.theme === black ? lofi : black;
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('theme', state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userReducer.actions;
export default userReducer.reducer;
