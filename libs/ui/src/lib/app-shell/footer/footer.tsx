import React, { FC } from 'react';
import './footer.scss';

/* eslint-disable-next-line */
export interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <h4 className="footer_text">&copy; Copyright 2020 Bookshop.com • All Rights Reserved FuckingAtez&trade;</h4>
  );
};

export default Footer;
