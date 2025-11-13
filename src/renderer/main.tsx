// Import Modules
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Import Styles & Scripts
import './main.css';

// Bootstrap React Application
import App from './app/App.tsx';
createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
