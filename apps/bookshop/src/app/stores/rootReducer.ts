import { combineReducers } from '@reduxjs/toolkit';
import { booksReducer } from '@acme-corp/books/feature';

const rootReducer = combineReducers({
  books: booksReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;