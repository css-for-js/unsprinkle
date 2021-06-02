import React from 'react';
import styled from 'styled-components/macro';

const Footer = () => {
  return <Wrapper>© 2021-present. All rights reserved.</Wrapper>;
};

const Wrapper = styled.footer`
  text-align: center;
  padding: 32px;
  font-weight: 350;
`;

export default Footer;
