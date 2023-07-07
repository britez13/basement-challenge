type ActionTypes =
  | "TOGGLE_CART"
  | "ADD_PRODUCT_TO_CART"
  | "INCREASE_PRODUCT_QUANTITY"
  | "DECREASE_PRODUCT_QUANTITY"
  | "GET_DATA_FROM_LOCAL_STORAGE"
  | "RESET_CART";

interface Children {
  children: ReactNode;
}

interface Product {
  id: string;
  name: string;
  price: number;
  img: string;
  description: string;
}

interface SavedProduct extends Product {
  quantity: number;
}

interface GlobalState {
  isCartOpen: boolean;
  savedProducts: Array<SavedProduct> | [];
}
