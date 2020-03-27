import React from 'react';
import { Book } from '@acme-corp/books/data-access';
import {
  EuiProgress,
  EuiFlexGrid,
  EuiFlexItem,
} from '@elastic/eui';
import BookItem from './book-item';
import './book-list.scss';

/* eslint-disable-next-line */
export interface BookListProps {
  isLoading: boolean;
  list: Array<Book>;
}

export const BookList = (props: BookListProps) => {
  return (
    <EuiFlexGrid columns={4}>
      { !props.isLoading && <EuiProgress size="xs" color="accent" /> }
      { !!props.list &&
          (props.list.map(book => (
            <EuiFlexItem key={book.id}>
              <BookItem book={book} />
            </EuiFlexItem>
        )))
      }
    </EuiFlexGrid>
  );
};

export default BookList;
