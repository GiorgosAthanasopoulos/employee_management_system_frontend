import React from 'react';
import {createRoot} from 'react-dom/client';

import App from './components/App';

import './stylesheets/index.css';

const root = createRoot(document.getElementById('root'));
root.render(<App/>);
