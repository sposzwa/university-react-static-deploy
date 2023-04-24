import React from 'react';

export default function Navigation({ links }) {
  return (
    <nav>
      <p>Navigation bar</p>
      <ul>
        {links.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>
    </nav>
  );
}
