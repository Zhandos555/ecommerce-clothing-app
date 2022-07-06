import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer";

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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_TOGGLE: "SET_CART_TOGGLE",
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_CART_TOGGLE:
      return {
        ...state,
        isCartOpen: payload,
      };

    default:
      throw new Error(`Unhandled type of ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);

    const newCartTotal = newCartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity * cartItem.price;
    }, 0);
    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartCount: newCartCount,
        cartItems: newCartItems,
        cartTotal: newCartTotal,
      })
    );
  };

  const setIsCartOpen = (boolean) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_CART_TOGGLE, boolean));
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemFromCart = (cartItemtToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemtToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const clearItemFromCart = (cartItemtToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemtToClear);
    updateCartItemsReducer(newCartItems);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
