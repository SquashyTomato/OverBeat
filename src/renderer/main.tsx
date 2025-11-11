// Import Modules
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import Styles & Scripts
//import './scripts/main.js';
import './main.css';

// Render React Application
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <h1 className="text-3xl font-bold underline">Hello World!</h1>
    </React.StrictMode>,
);
