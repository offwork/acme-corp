import {
  createSlice,
  createSelector,
  PayloadAction
} from '@reduxjs/toolkit';
// in order to import, perhaps must be like `@app` :)
import { AppThunk } from '../../../../../apps/bookshop/src/app/stores/store';

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
  title?: string
  subtitle?: string
  publish_date?: string
  description?: string
  image?: string
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
export const fetchBooks = (): AppThunk => async dispatch => {
  try {
    dispatch(getBooksStart());
    // Replace this with your custom fetch call.
    // For example, `const data = await myApi.getBooks`;
    // Right now we just load an empty array.
    const data = await fakeAPICall();
    dispatch(getBooksSuccess(data));
  } catch (err) {
    dispatch(getBooksFailure(err));
  }
};


function fakeAPICall(): Promise<BooksEntity[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([{
        "id": 1,
        "title": "Assistant Professor",
        "subtitle": "FpML",
        "publish_date": "01/07/2020",
        "description": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        "image": "https://semantic-ui.com/images/wireframe/image.png"
      }, {
        "id": 2,
        "title": "Environmental Tech",
        "subtitle": "Corel Draw",
        "publish_date": "07/14/2019",
        "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        "image": "https://semantic-ui.com/images/wireframe/image.png"
      }, {
        "id": 3,
        "title": "Operator",
        "subtitle": "Environmental Science",
        "publish_date": "06/01/2019",
        "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        "image": "https://semantic-ui.com/images/wireframe/image.png"
      }, {
        "id": 4,
        "title": "Pharmacist",
        "subtitle": "CA Unicenter NSM",
        "publish_date": "07/23/2019",
        "description": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        "image": "https://semantic-ui.com/images/wireframe/image.png"
      }])
    }, 2000);
  });
}