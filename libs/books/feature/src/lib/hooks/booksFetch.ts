import { useEffect, useState } from 'react';
import axios from 'axios';
import { Book } from '@acme-corp/books/data-access';
import { BooksState } from '../books.slice';

export function useBooksFetch(): [BooksState, Function] {
  const setActive = (id: number | string) => id;
  const [state, setState] = useState<BooksState>({ entities: [], loaded: false, error: null });

  useEffect(() => {

  }, []);

  return [state, setActive];
}