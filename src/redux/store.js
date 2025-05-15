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
        listId: action.payload.listId,
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
      case 'ADD_LIST': {
      const newList = {
        id: shortid(),
        title: action.payload.title,
        description: action.payload.description,
      };
      return {
        ...state,
        lists: [...state.lists, newList],
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
