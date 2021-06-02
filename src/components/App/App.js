import React from 'react';
import styled from 'styled-components/macro';

import GlobalStyles from '../GlobalStyles';
import Header from '../Header';
import Hero from '../Hero';
import MainContent from '../MainContent';
import Footer from '../Footer';

const App = () => {
  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <main>
        <Hero />
        <MainContent />
      </main>
      <Footer />
      <GlobalStyles />
    </>
  );
};

const HeaderWrapper = styled.div`
  position: sticky;
  z-index: 2;
  top: 0;
`;

export default App;
