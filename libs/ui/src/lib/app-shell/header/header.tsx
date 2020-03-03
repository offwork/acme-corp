import React from 'react';
import { Pane, Heading, Link, SearchInput } from 'evergreen-ui';
import { UserAvatar } from '../../user-avatar/user-avatar';
import './header.scss';

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  return (
    <Pane className="header" display="flex" elevation={1} alignItems="end" padding={16} background="#1557f2">
      <Pane flex={1} alignItems="center" display="flex">
        <Heading color="white">Bookshop</Heading>
      </Pane>
      <Pane display="flex" alignItems="end" marginLeft={48} width="100%">
        <SearchInput placeholder="Filter traits..." width="100%" />
        <div className="links">
          <Link href="#" marginRight={12}>Default</Link>
          <Link href="#" marginRight={12}>Green</Link>
          <Link href="#" marginRight={12}>Blue</Link>
          <Link href="#" marginRight={12}>Neutral</Link>
        </div>
        <UserAvatar />
      </Pane>
    </Pane>
  );
};

export default Header;
