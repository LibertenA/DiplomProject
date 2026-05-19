import { mockProducts } from '@/data/mockProducts'; 

export type Product = {
  id: number;
  title: string;
  price: number;
  discount: number;
  count: number;
  image: string;
};

export type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  count: number;
  discount: number;
};

export type CartState = {
  items: CartItem[];
};

/*const defaultCartItems: CartItem[] = mockProducts.filter(product => product.count > 0).map(product => ({
  id: product.id,
  title: product.title,
  price: product.price,
  discount: product.discount,
  count: product.count,
  image: product.images[0],
}));*/


/*export const initialState: CartState = {
  items: defaultCartItems 
};*/

export const initialState: CartState = {
  items: [] 
};

export type Action = { type: 'ADD';  payload: Product  } | { type: 'INCREMENT'; payload: number } | { type: 'DECREMENT'; payload: number } | { type: 'REMOVE'; payload: number };

export function cartReducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case 'ADD':
      const product = action.payload;

      const existingItem = state.items.find(item => item.id === product.id);

      if (!existingItem) {
        return {
          ...state, items: [...state.items, { ...product, count: 1 }]
        };
      }

      /*const newItem: CartItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        count: product.count || 1,
        discount: product.discount
      };*/

      return {
        ...state,
        /*items: [...state.items, newItem]*/
      };

    case 'INCREMENT':
      return { ...state, 
        items: state.items.map(item =>
        item.id === action.payload ? { ...item, count: item.count + 1 } : item
      )}

    case 'DECREMENT':
      const targetItem = state.items.find(item => item.id === action.payload);

      if (!targetItem) return state;

      if (targetItem.count <= 1) {
        return{ ...state, 
        items: state.items.filter(item => item.id !== action.payload)};
      }

      return { ...state, 
        items:state.items.map(item =>
        item.id === action.payload ? { ...item, count: item.count - 1 } : item
      )}

    case 'REMOVE':
      return { ...state, 
        items: state.items.filter(item => item.id !== action.payload)}

    default:
      return state;
  }
}
