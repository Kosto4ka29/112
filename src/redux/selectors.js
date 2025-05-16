import { createSelectorCreator, defaultMemoize } from 'reselect';
import isEqual from 'lodash/isEqual';
import strContains from '../utils/strContains';
import { createSelector } from 'reselect';

// własna wersja createSelector z głęboką porównywarką
const createDeepEqualSelector = createSelectorCreator(defaultMemoize, isEqual);

// podstawowe selektory
export const getAllLists = state => state.lists;
export const getAllColumns = state => state.columns;
export const getAllCards = state => state.cards;
export const getSearchString = state => state.searchString;

// dodatkowy parametr (np. listId / columnId)
export const getIdParam = (_, id) => id;

// ✅ selektor: lista o konkretnym ID
export const getListById = createDeepEqualSelector(
  [getAllLists, getIdParam],
  (lists, listId) => lists.find(list => list.id === listId)
);

// ✅ selektor: kolumny z listy
export const getColumnsByList = createDeepEqualSelector(
  [getAllColumns, getIdParam],
  (columns, listId) => columns.filter(column => column.listId === Number(listId))
);

// ✅ selektor: karty z kolumny z filtrem
export const getFilteredCards = createDeepEqualSelector(
  [getAllCards, getSearchString, getIdParam],
  (cards, searchString, columnId) =>
    cards.filter(
      card =>
        card.columnId === columnId &&
        strContains(card.title, searchString)
    )
);



export const getFavoriteCards = createSelector(
  [getAllCards],
  (cards) => cards.filter(card => card.isFavorite)
);


