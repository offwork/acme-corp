import React, { useState } from 'react';
import {
  EuiAvatar,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHeaderSectionItemButton,
  EuiLink,
  EuiText,
  EuiSpacer,
  EuiPopover,
} from '@elastic/eui';
import './user-avatar.scss';

/* eslint-disable-next-line */
export interface UserAvatarProps {}

export const UserAvatar = (props: UserAvatarProps) => {
  const [ state, setState ] = useState(false);

  const button = (
    <EuiHeaderSectionItemButton
      aria-controls="headerUserMenu"
      aria-expanded={state}
      aria-haspopup="true"
      aria-label="Account menu"
      onClick={() => setState(!state)}>
      <EuiAvatar name="John Username" size="s" />
    </EuiHeaderSectionItemButton>
  );

  return (
    <EuiPopover
      id="headerUserMenu"
      ownFocus
      button={button}
      isOpen={state}
      anchorPosition="downRight"
      closePopover={() => setState(false)}
      panelPaddingSize="none">
      <div style={{ width: 320 }}>
        <EuiFlexGroup
          gutterSize="m"
          className="euiHeaderProfile"
          responsive={false}>
          <EuiFlexItem grow={false}>
            <EuiAvatar name="Kerem Ozdemir" size="xl" />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiText><p>Kerem Ozdemir</p></EuiText>
            <EuiSpacer size="m" />
            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiFlexGroup justifyContent="spaceBetween">
                  <EuiFlexItem grow={false}>
                    <EuiLink href="">Edit profile</EuiLink>
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <EuiLink href="">Log out</EuiLink>
                  </EuiFlexItem>
                </EuiFlexGroup>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    </EuiPopover>
  );
};

export default UserAvatar;
