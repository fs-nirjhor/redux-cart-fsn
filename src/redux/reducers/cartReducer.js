import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

export const initialState = {
  cart: [],
  products: [
    { name: "Xiaomi", id: 1 },
    { name: "Samsung", id: 2 },
    { name: "Oppo", id: 3 },
    { name: "Apple", id: 4 },
    { name: "Vivo", id: 5 },
  ],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const serial = state.cart.length + 1;
      const newProduct = { ...action.product, serial: serial };
      const newCart = [...state.cart, newProduct];
      return { ...state, cart: newCart };

    case REMOVE_FROM_CART:
      const remainingCart = state.cart.filter(
        (product) => product.serial !== action.product.serial
      );
      return { ...state, cart: remainingCart };

    default:
      return state;
  }
};
