// Import Modules
import { useEffect } from 'react';

// Import Components
import Navbar from './components/Navbar.tsx';

// Import Pages
import Home from './pages/Home.tsx';

// Page Function
export default function App() {
    useEffect(() => {
        window.appAPI.onBootStatus((message: string) => {
            console.log(message);
        });
    }, []);

    return (
        <>
            <Navbar />
            <Home />
        </>
    );
};
