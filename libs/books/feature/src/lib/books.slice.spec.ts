import {
  booksReducer,
  getBooksStart,
  getBooksFailure,
  getBooksSuccess
} from './books.slice';

describe('books reducer', () => {
  it('should handle initial state', () => {
    expect(booksReducer(undefined, { type: '' })).toMatchObject({
      entities: []
    });
  });

  it('should handle get books actions', () => {
    let state = booksReducer(undefined, getBooksStart());

    expect(state).toEqual({
      loaded: false,
      error: null,
      entities: []
    });

    state = booksReducer(state, getBooksSuccess([{ id: 1 }]));

    expect(state).toEqual({
      loaded: true,
      error: null,
      entities: [{ id: 1 }]
    });

    state = booksReducer(state, getBooksFailure('Uh oh'));

    expect(state).toEqual({
      loaded: true,
      error: 'Uh oh',
      entities: [{ id: 1 }]
    });
  });
});
