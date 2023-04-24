import React from 'react';
import Browser from './Browser';

export default function Browsers({ browsers }) {
  return (
    <section>
      {browsers.map((browser) => {
        return <Browser browser={browser} />;
      })}
    </section>
  );
}
