import React from 'react';
import styled from 'styled-components/macro';
import { Search } from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

const SearchInput = (props) => {
  return (
    <Wrapper {...props}>
      <label htmlFor="header-search">
        <VisuallyHidden>Search</VisuallyHidden>
      </label>
      <Input id="header-search" placeholder="Search…" />
      <SubmitButton>
        <VisuallyHidden>Submit</VisuallyHidden>
        <Search size={16} />
      </SubmitButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-width: 300px;
  height: 2em;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: var(--color-gray-100);
  /* Arbitrarily large value to ensure rounding */
  border-radius: 1000px;
  border: none;
  padding: 0 16px;
  outline-offset: 4px;
  font-size: 1rem;

  &:focus {
    background: var(--color-gray-200);
  }
`;

const SubmitButton = styled.button`
  position: absolute;
  top: 0;
  right: 0px;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding-right: 8px;
  background: transparent;
  outline-offset: 4px;
  cursor: pointer;
`;

export default SearchInput;
