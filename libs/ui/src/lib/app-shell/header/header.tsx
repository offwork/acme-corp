import React, { FC } from 'react';
import { UserAvatar } from '../../user-avatar/user-avatar';
import './header.scss';

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header:FC<HeaderProps> = () => {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
      <a className="navbar-brand" href="#">
        Bookshop
      </a>
      <button className="navbar-toggler"
        type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Books</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/cart">Cart</a>
          </li>
        </ul>
      </div>
      <UserAvatar />
    </nav>
  );
};


export default Header;
