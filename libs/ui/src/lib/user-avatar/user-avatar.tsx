import React from 'react';
import { Avatar, Popover, Menu, Position } from 'evergreen-ui';

import './user-avatar.scss';

/* eslint-disable-next-line */
export interface UserAvatarProps {}

export const UserAvatar = (props: UserAvatarProps) => {
  return (
    <div>
      <Popover position={Position.BOTTOM_RIGHT} content={
        <Menu>
          <Menu.Group>
            <Menu.Item icon="user">Profile...</Menu.Item>
            <Menu.Item icon="settings">Settings...</Menu.Item>
            <Menu.Item icon="inbox">inbox...</Menu.Item>
          </Menu.Group>
          <Menu.Divider />
          <Menu.Group>
            <Menu.Item icon="help">Help...</Menu.Item>
            <Menu.Item icon="log-out" intent="danger">Logout...</Menu.Item>
          </Menu.Group>
        </Menu>
      }>
        <Avatar className="avatar" isSolid name="Kerem Ozdemir" size={40} />
      </Popover>
    </div>
  );
};

export default UserAvatar;
