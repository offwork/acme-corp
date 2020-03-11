import {
  createSlice,
  createSelector,
  Action,
  PayloadAction
} from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

export const BOOKS_FEATURE_KEY = 'books';

/*
 * Change this from `any` if there is a more specific error type.
 */
export type BooksError = any;

/*
 * Update these interfaces according to your requirements.
 */
export interface BooksEntity {
  id: number;
}

export interface BooksState {
  entities: BooksEntity[];
  loaded: boolean;
  error: BooksError;
}

export const initialBooksState: BooksState = {
  entities: [],
  loaded: false,
  error: null
};

export const booksSlice = createSlice({
  name: BOOKS_FEATURE_KEY,
  initialState: initialBooksState as BooksState,
  reducers: {
    getBooksStart: (state, action: PayloadAction<undefined>) => {
      state.loaded = false;
    },
    getBooksSuccess: (state, action: PayloadAction<BooksEntity[]>) => {
      state.loaded = true;
      state.entities = action.payload;
    },
    getBooksFailure: (state, action: PayloadAction<BooksError>) => {
      state.error = action.payload;
    }
  }
});

/*
 * Export reducer for store configuration.
 */
export const booksReducer = booksSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * const dispatch = useDispatch();
 * dispatch(getBooksSuccess([{ id: 1 }]));
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const {
  getBooksStart,
  getBooksSuccess,
  getBooksFailure
} = booksSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * const entities = useSelector(selectBooksEntities);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
export const getBooksState = (rootState: any): BooksState =>
  rootState[BOOKS_FEATURE_KEY];

export const selectBooksEntities = createSelector(
  getBooksState,
  s => s.entities
);

export const selectBooksLoaded = createSelector(
  getBooksState,
  s => s.loaded
);

export const selectBooksError = createSelector(
  getBooksState,
  s => s.error
);

/*
 * Export default effect, handled by redux-thunk.
 * You can replace this with your own effects solution.
 */
export const fetchBooks = (): ThunkAction<
  void,
  any,
  null,
  Action<string>
> => async dispatch => {
  try {
    dispatch(getBooksStart());
    // Replace this with your custom fetch call.
    // For example, `const data = await myApi.getBooks`;
    // Right now we just load an empty array.
    const data = [];
    dispatch(getBooksSuccess(data));
  } catch (err) {
    dispatch(getBooksFailure(err));
  }
};
