import React, { FC, ReactNode } from 'react';
import { Pane, Heading } from 'evergreen-ui';
import './content.scss';

/* eslint-disable-next-line */
export interface ContentProps {
  children?: ReactNode
}

export const Content: FC<ContentProps> = ({ children }) => {
  return (
    <Pane clearfix>
      <Heading is="h1">Content is here!!</Heading>
      {children}
    </Pane>
  );
};

export default Content;
