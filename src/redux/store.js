import { createStore } from 'redux';
import initialState from './initialState.js';
import shortid from 'shortid';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CARD': {
      const newCard = {
        id: shortid(),
        title: action.payload.title,
        columnId: action.payload.columnId,
      };
      return {
        ...state,
        cards: [...state.cards, newCard],
      };
    }

    case 'ADD_COLUMN': {
      const newColumn = {
        id: shortid(),
        title: action.payload.title,
        icon: action.payload.icon,
      };
      return {
        ...state,
        columns: [...state.columns, newColumn],
      };
    }

    case 'UPDATE_SEARCHSTRING': {
      return {
        ...state,
        searchString: action.payload,
      };
    }

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
