import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source
            type="image/avif"
            srcSet={`
              ${src.replace('.jpg', '.avif')} 1x,
              ${src.replace('.jpg', '@2x.avif')} 2x,
              ${src.replace('.jpg', '@3x.avif')} 3x
              `}
          />
          <source
            type="image/jpeg"
            srcSet={`
            ${src} 1x,
            ${src.replace('.jpg', '@2x.jpg')} 2x,
            ${src.replace('.jpg', '@3x.jpg')} 3x
            `}
          />
          <Image alt={alt} src={src}/>
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
    text-decoration: none;
    color: inherit;
    outline-offset: 4px;
`;

const Image = styled.img`
    display: block;
    width: 100%;
    height: 300px;
    border-radius: 2px;
    margin-bottom: 8px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    object-position: center;
`;

const Tags = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
