import React from 'react';

import './user-avatar.scss';

/* eslint-disable-next-line */
export interface UserAvatarProps {}

export const UserAvatar = (props: UserAvatarProps) => {

  return (
    <ul className="navbar-nav">
      <li className="nav-item dropdown">
        <a className="nav-item dropdown"
          href="#" id="navbarDropdownMenuLink"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          <img className="rounded-circle"
            src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
            width="40"
            height="40" />
        </a>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Dashboard</a>
          <a className="dropdown-item" href="#">Edit Profile</a>
          <a className="dropdown-item" href="#">Log Out</a>
        </div>
      </li>
    </ul>
  );
};

export default UserAvatar;
