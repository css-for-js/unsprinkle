import React from 'react';
import styled from 'styled-components/macro';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import SearchInput from '../SearchInput';

const Header = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Logo />
        <GrowingSearchInput />
        <DesktopNav>
          <NavList>
            <li>
              <NavLink href="">Categories</NavLink>
            </li>
            <li>
              <NavLink href="">Submissions</NavLink>
            </li>
            <li>
              <NavLink href="">Sign Up</NavLink>
            </li>
          </NavList>
        </DesktopNav>
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background-color: var(--color-background);
`;

const InnerWrapper = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  gap: 48px;
  padding: 16px 32px;
`;

const DesktopNav = styled.nav`
  display: none;
  margin-left: auto;

  @media (min-width: 60rem) {
    display: revert;
  }
`;

const GrowingSearchInput = styled(SearchInput)`
  flex: 1;
`;

const NavList = styled.ul`
  display: flex;
  gap: 32px;
`;

const NavLink = styled.a`
  color: inherit;
  text-decoration: none;
  font-weight: 475;
`;

export default Header;
