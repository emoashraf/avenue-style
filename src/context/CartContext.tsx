import React, { createContext, useContext, useReducer, useEffect } from "react";
import { CartItem, Product } from "@/types/product";

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: { product: Product; size: string; color?: string } }
  | { type: "REMOVE_ITEM"; payload: { id: string; size: string } }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; size: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: CartItem[] };

const calculateTotals = (items: CartItem[]) => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return { totalItems, totalPrice };
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const { product, size, color } = action.payload;
      const existingIndex = state.items.findIndex(
        (item) => item.id === product.id && item.selectedSize === size
      );

      let newItems: CartItem[];
      if (existingIndex > -1) {
        newItems = state.items.map((item, index) =>
          index === existingIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        const newItem: CartItem = {
          ...product,
          quantity: 1,
          selectedSize: size,
          selectedColor: color,
        };
        newItems = [...state.items, newItem];
      }

      return { items: newItems, ...calculateTotals(newItems) };
    }

    case "REMOVE_ITEM": {
      const newItems = state.items.filter(
        (item) => !(item.id === action.payload.id && item.selectedSize === action.payload.size)
      );
      return { items: newItems, ...calculateTotals(newItems) };
    }

    case "UPDATE_QUANTITY": {
      const { id, size, quantity } = action.payload;
      if (quantity <= 0) {
        const newItems = state.items.filter(
          (item) => !(item.id === id && item.selectedSize === size)
        );
        return { items: newItems, ...calculateTotals(newItems) };
      }

      const newItems = state.items.map((item) =>
        item.id === id && item.selectedSize === size ? { ...item, quantity } : item
      );
      return { items: newItems, ...calculateTotals(newItems) };
    }

    case "CLEAR_CART":
      return { items: [], totalItems: 0, totalPrice: 0 };

    case "LOAD_CART":
      return { items: action.payload, ...calculateTotals(action.payload) };

    default:
      return state;
  }
};

interface CartContextType extends CartState {
  addItem: (product: Product, size: string, color?: string) => void;
  removeItem: (id: string, size: string) => void;
  updateQuantity: (id: string, size: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    totalItems: 0,
    totalPrice: 0,
  });

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      dispatch({ type: "LOAD_CART", payload: JSON.parse(savedCart) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.items));
  }, [state.items]);

  const addItem = (product: Product, size: string, color?: string) => {
    dispatch({ type: "ADD_ITEM", payload: { product, size, color } });
  };

  const removeItem = (id: string, size: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id, size } });
  };

  const updateQuantity = (id: string, size: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, size, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{ ...state, addItem, removeItem, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
