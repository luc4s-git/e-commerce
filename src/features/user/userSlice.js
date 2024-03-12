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

const initialState = {
  user: { userName: 'coding addict' },
  theme: getThemeFromLocal(),
};

const userReducer = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log({ from: 'login', state, payload: action.payload });
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
