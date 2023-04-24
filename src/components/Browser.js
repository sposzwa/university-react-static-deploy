import React from 'react';

export default function Browser({ browser }) {
  const { name, image, desc } = browser;

  return (
    <article>
      <header>
        <h2>{name}</h2>
        <img src={image} alt={`${name} image`} width="250" />
      </header>
      <p>{desc}</p>
    </article>
  );
}
