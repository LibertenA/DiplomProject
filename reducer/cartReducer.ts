export type CartItem = {
  id: number;
  price: number;
  discount: number;
  count: number;
  title: string;
  images: string;
  [key: string]: any;
};

export type State = CartItem[];

export type Action = { type: 'INCREMENT'; id: number } | { type: 'DECREMENT'; id: number } | { type: 'REMOVE'; id: number };

export function cartReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'INCREMENT':
      return state.map(item =>
        item.id === action.id ? { ...item, count: item.count + 1 } : item
      );

    case 'DECREMENT':
      const targetItem = state.find(item => item.id === action.id);
      if (!targetItem) return state;

      if (targetItem.count <= 1) {
        return state.filter(item => item.id !== action.id);
      }

      return state.map(item =>
        item.id === action.id ? { ...item, count: item.count - 1 } : item
      );

    case 'REMOVE':
      return state.filter(item => item.id !== action.id);

    default:
      return state;
  }
}
