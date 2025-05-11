import { createStore } from 'redux';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_CARD':
        const newCard = {
          id: Math.random().toString(36).substr(2, 9), // losowe ID
          title: action.payload.title,
          columnId: action.payload.columnId,
        };
        return {
          ...state,
          cards: [...state.cards, newCard],
        };
  
      default:
        return state;
    }
  };
  

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;