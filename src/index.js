import React from 'react';
import { createRoot } from 'react-dom';
import App from './components/App';
import browsers from './lib/data.json';

const root = createRoot(document.getElementById('root'));
root.render(<App browsers={browsers} />);
