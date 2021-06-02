import React from 'react';
import styled from 'styled-components/macro';

const Logo = () => {
  return <Wrapper href="/">Unsprinkle</Wrapper>;
};

const Wrapper = styled.a`
  font-size: 1.25rem;
  font-weight: 750;
  color: inherit;
  text-decoration: none;
`;

export default Logo;
