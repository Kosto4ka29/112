import strContains from '../utils/strContains';

export const getFilteredCards = (state, columnId) =>
  state.cards.filter(
    card =>
      card.columnId === columnId &&
      strContains(card.title, state.searchString)
  );

export const getAllColumns = state => state.columns;
