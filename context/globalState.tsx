import { useReducer, createContext, useEffect } from "react";

function getSavedProducts() {
  try {
    if (typeof window !== "undefined") {
      const cartFromLocalStorage = localStorage.getItem("basementCart");
      if (cartFromLocalStorage && typeof cartFromLocalStorage === "string") {
        const products: Array<SavedProduct> = JSON.parse(cartFromLocalStorage);
        return products;
      }
      return [];
    }
    return [];
  } catch (error) {
    return [];
  }
}

const initialState: GlobalState = {
  isCartOpen: false,
  savedProducts: [],
};

export const GlobalStateContext = createContext(
  initialState as unknown as [
    GlobalState,
    React.Dispatch<{
      type: ActionTypes;
      payload?: Product;
    }>
  ]
);

const GlobalStateProvider: React.FC<Children> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (typeof window !== "undefined") {      
      dispatch({type: "GET_DATA_FROM_LOCAL_STORAGE"})
    }
  }, [])

  return (
    <GlobalStateContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalStateContext.Provider>
  );
};

function reducer(
  state: GlobalState,
  action: { type: ActionTypes; payload?: Product }
): GlobalState {
  switch (action.type) {
    case "TOGGLE_CART": {
      const newsState: GlobalState = {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
      return newsState;
    }

    case "GET_DATA_FROM_LOCAL_STORAGE": {      
      const newState = {...state, savedProducts: getSavedProducts()} 
      return newState 
    }

    case "RESET_CART": {
      const newState: GlobalState = { isCartOpen: false, savedProducts: [] }
      localStorage.setItem(
        "basementCart",
        JSON.stringify(newState.savedProducts)
      );
      return newState
    }

    case "ADD_PRODUCT_TO_CART": {
      const existingProduct = state.savedProducts.find(
        (product) => product.id === action.payload?.id
      );

      if (existingProduct) {
        const newSavedProducts: Array<SavedProduct> = state.savedProducts.map(
          (product) =>
            product.id === action.payload?.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
        );
        const newState = { ...state, savedProducts: newSavedProducts };
        localStorage.setItem(
          "basementCart",
          JSON.stringify(newState.savedProducts)
        );
        return newState;
      } else {
        if (action.payload) {
          const newState = {
            ...state,
            savedProducts: [
              ...state.savedProducts,
              { ...action.payload, quantity: 1 },
            ],
          };
          localStorage.setItem(
            "basementCart",
            JSON.stringify(newState.savedProducts)
          );
          return newState;
        }

        return state;
      }
    }

    case "INCREASE_PRODUCT_QUANTITY": {
      const newState = {
        ...state,
        savedProducts: state.savedProducts.map((product) =>
          product.id === action.payload?.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
      localStorage.setItem(
        "basementCart",
        JSON.stringify(newState.savedProducts)
      );
      return newState;
    }

    case "DECREASE_PRODUCT_QUANTITY": {
      const decreasedState = {
        ...state,
        savedProducts: state.savedProducts.map((product) =>
          product.id === action.payload?.id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      };
      const filteredState = decreasedState.savedProducts.filter(
        (product) => product.quantity !== 0
      );
      const newState = { ...state, savedProducts: filteredState };
      localStorage.setItem(
        "basementCart",
        JSON.stringify(newState.savedProducts)
      );
      return newState;
    }

    default: {
      console.log("Ninguna accion correspondiente");
      localStorage.setItem("basementCart", JSON.stringify(state.savedProducts));
      return state;
    }
  }
}

export default GlobalStateProvider;
