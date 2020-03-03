import React, { FC } from 'react';
import { Pane, Text } from 'evergreen-ui';

import './footer.scss';

/* eslint-disable-next-line */
export interface FooterProps {}

export const Footer: FC<FooterProps & { className: string }> = ({className}) => {
  return (
    <div className={className}>
      <Pane background="tint1" padding={24} display="flex">
        <Text margin='auto'>&copy; Copyright 2020 Bookshop.com • All Rights Reserved Atez&trade;</Text>
      </Pane>
    </div>
  );
};

export default Footer;
