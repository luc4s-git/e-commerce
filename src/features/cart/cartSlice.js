import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('cart')) || initialState;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const item = state.cartItems.find(
        (i) => i.cartID === action.payload.cartID
      );

      if (item) {
        item.amount += action.payload.amount;
      } else {
        state.cartItems.push(action.payload);
      }

      state.numItemsInCart += action.payload.amount;
      state.cartTotal += action.payload.price * action.payload.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success('Item added to cart');
    },
    removeItem: (state, action) => {
      const product = state.cartItems.find((i) => i.cartID === action.payload);
      state.cartItems = state.cartItems.filter(
        (i) => i.cartID !== action.payload
      );

      state.numItemsInCart -= product.amount;
      state.cartTotal -= product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.error('Item removed from cart.');
    },
    editItem: (state, action) => {
      const { cartID, amount } = action.payload;
      const product = state.cartItems.find((i) => i.cartID === cartID);
      state.numItemsInCart += amount - product.amount;
      state.cartTotal += product.price * (amount - product.amount);
      product.amount = amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success('cart updated');
    },
    clearCart: () => {
      localStorage.setItem('cart', JSON.stringify(initialState));
      return initialState;
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
