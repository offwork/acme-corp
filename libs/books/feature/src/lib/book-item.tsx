import React from 'react';
import {
  EuiButton,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui';
import { Book } from '@acme-corp/books/data-access';
import './book-item.scss';

/* eslint-disable-next-line */
export interface BookItemProps {
  book?: Book
}

export const BookItem = (props: BookItemProps) => {
  const cardFooterContent = (
    <EuiFlexGroup justifyContent="flexEnd">
      <EuiFlexItem grow={false}>
        <EuiButton>Go for it</EuiButton>
      </EuiFlexItem>
    </EuiFlexGroup>
  );

  return (
    <EuiCard
      textAlign="left"
      href={props.book.volumeInfo.previewLink}
      target="_blank"
      image={props.book.volumeInfo.imageLinks.thumbnail}
      title={props.book.volumeInfo.title}
      description={props.book.volumeInfo.description}
      footer={cardFooterContent} />
  );
};

export default BookItem;
