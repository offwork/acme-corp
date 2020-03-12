import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getBooksStart, fetchBooks } from './books.slice';

import './books-feature.scss';

/* eslint-disable-next-line */
export interface BooksFeatureProps {}

export const BooksFeature = (props: BooksFeatureProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const showList = () => {
    dispatch(getBooksStart())
  };

  return (
    <div>
      <h1>Welcome to books-feature component!</h1>
      <button onClick={showList}>Click</button>
    </div>
  );
};

export default BooksFeature;
