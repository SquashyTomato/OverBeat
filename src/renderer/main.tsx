// Import Modules
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import Styles & Scripts
import './main.css';

// Import React App
import App from './app/App.tsx';

// Render React Application
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
