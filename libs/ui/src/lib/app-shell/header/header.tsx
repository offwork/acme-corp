import React, { FC } from 'react';
import {
  EuiHeader,
  EuiHeaderSectionItem,
  EuiHeaderLogo,
  EuiHeaderLinks,
  EuiHeaderLink,
  EuiFieldSearch,
} from '@elastic/eui';
import { UserAvatar } from '../../user-avatar/user-avatar';
import './header.scss';

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header:FC<HeaderProps> = () => {
  return (
    <EuiHeader>
      <EuiHeaderSectionItem border="right">
        <EuiHeaderLogo href="/">Books</EuiHeaderLogo>
      </EuiHeaderSectionItem>
      <EuiHeaderLinks>
        <EuiHeaderLink href="/" isActive>Books</EuiHeaderLink>
        <EuiHeaderLink href="/about">About</EuiHeaderLink>
        <EuiHeaderLink href="/contact">Contact</EuiHeaderLink>
        <EuiHeaderLink iconType="help" href="/cart">Cart</EuiHeaderLink>
      </EuiHeaderLinks>
      <EuiFieldSearch placeholder="Search for anything" compressed />
      <UserAvatar />
    </EuiHeader>
  );
};


export default Header;
