import React, { FC } from 'react';
import { Pane, Heading, Link, SearchInput } from 'evergreen-ui';
import { UserAvatar } from '../../user-avatar/user-avatar';
import './header.scss';

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header:FC<HeaderProps> = () => {
  return (
    <Pane display="flex" elevation={1}  alignItems="center" padding={16} background="#1557f2">
      <Heading color="white">Bookshop</Heading>
      <Pane display="flex" alignItems="center" marginLeft={48} width="100%">
        <SearchInput placeholder="Filter traits..." width="100%" />
        <div className="links">
          <Link href="/" marginRight={12}>Books</Link>
          <Link href="/about" marginRight={12}>About</Link>
          <Link href="/contact" marginRight={12}>Contact</Link>
          <Link href="/cart" marginRight={12}>Cart</Link>
        </div>
        <UserAvatar />
      </Pane>
    </Pane>
  );
};


export default Header;
