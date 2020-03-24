import React from 'react';
import { Book } from '@acme-corp/books/data-access';

import './book-list.scss';

/* eslint-disable-next-line */
export interface BookListProps {
  isLoading: boolean;
  list: Array<Book>;
}

export const BookList = (props: BookListProps) => {
  return (
    <div>
      { !props.isLoading && <h3>Loading...</h3> }
      { !!props.list && 
        (props.list.map(book => (
          <li key={book.id}>
            <h3>{book.id}</h3>
          </li>
        ))) 
      }
    </div>
  );
};

export default BookList;
