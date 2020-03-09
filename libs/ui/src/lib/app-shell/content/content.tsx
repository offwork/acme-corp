import React, { FC, ReactNode } from 'react';
import { Pane } from 'evergreen-ui';
import './content.scss';

/* eslint-disable-next-line */
export interface ContentProps {
  children?: ReactNode
}

export const Content: FC<ContentProps> = ({ children }) => {
  return (
    <Pane clearfix padding={24}>
      {children}
    </Pane>
  );
};

export default Content;
