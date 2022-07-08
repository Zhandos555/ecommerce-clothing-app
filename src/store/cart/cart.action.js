import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer";

export const setIsCartOpen = (boolean) => {
  return createAction(CART_ACTION_TYPES.SET_CART_TOGGLE, boolean);
};

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemtToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemtToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, cartItemtToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemtToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((cartitem) => {
    return cartitem.id === productToAdd.id;
  });

  if (existingCartItem) {
    return cartItems.map((cartitem) => {
      return cartitem.id === productToAdd.id
        ? { ...cartitem, quantity: cartitem.quantity + 1 }
        : cartitem;
    });
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemtToRemove) => {
  const existingCartItem = cartItems.find((cartitem) => {
    return cartitem.id === cartItemtToRemove.id;
  });

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => {
      return cartItem.id !== cartItemtToRemove.id;
    });
  }

  return cartItems.map((cartItem) => {
    return cartItem.id === cartItemtToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
};

const clearCartItem = (cartItems, cartItemtToClear) => {
  return cartItems.filter((cartItem) => {
    return cartItem.id !== cartItemtToClear.id;
  });
};
