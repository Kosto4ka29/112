export const addColumn = payload => ({
  type: 'ADD_COLUMN',
  payload,
});

export const addCard = payload => ({
  type: 'ADD_CARD',
  payload,
});

export const updateSearchString = payload => ({
  type: 'UPDATE_SEARCHSTRING',
  payload,
});

export const addList = payload => ({ 
  type: 'ADD_LIST', 
  payload 
});

export const toggleCardFavorite = cardId => ({
  type: 'TOGGLE_CARD_FAVORITE',
  payload: cardId,
});

export const removeCard = cardId => ({
  type: 'REMOVE_CARD',
  payload: cardId,
});
