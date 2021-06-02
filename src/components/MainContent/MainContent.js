import React from 'react';
import styled from 'styled-components/macro';

import data from '../../data';
import MaxWidthWrapper from '../MaxWidthWrapper';
import PhotoGridItem from '../PhotoGridItem';
import VisuallyHidden from '../VisuallyHidden';

const MainContent = () => {
  return (
    <Wrapper>
      <VisuallyHidden>
        <h1>All Photos</h1>
      </VisuallyHidden>
      {data.map(({ id, src, alt, tags }) => (
        <PhotoGridItem
          key={id}
          id={id}
          src={src}
          alt={alt}
          tags={tags}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled(MaxWidthWrapper)`
  /*
    We haven't covered grid yet, but we'll learn more about
    this technique in a future module!
  */
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding-top: 128px;
  padding-bottom: 128px;
`;

export default MainContent;
