import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getBooksStart,
  fetchBooks,
  selectBooksEntities,
  selectBooksLoaded
} from './books.slice';
import BookList from './book-list';
import './books-feature.scss';


export const BooksFeature = () => {
  const dispatch = useDispatch();
  const entities = useSelector(selectBooksEntities);
  const loaded = useSelector(selectBooksLoaded);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const showList = () => {
    dispatch(getBooksStart())
  };

  return (
    <ul>
      <BookList isLoading={loaded} list={entities} />
    </ul>
  );
};

export default BooksFeature;
