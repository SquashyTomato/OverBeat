// Import Modules
import { useEffect } from 'react';
import { createHashRouter, RouterProvider, Outlet } from 'react-router-dom';

// Import Components
import Navbar from './components/Navbar.tsx';

// Import Pages
import Home from './pages/Home.tsx';
import Settings from './pages/Settings.tsx';

// Create Page Layout
function PageLayout() {
    return (
        <>
            <Navbar />
            <div className="flex-1 overflow-hidden">
                <Outlet />
            </div>
        </>
    );
}

// Define React Router
const Router = createHashRouter([{
    path: '/',
    element: <PageLayout />,
    children: [
        { index: true, element: <Home /> },
        { path: '/settings', element: <Settings /> },
    ],
}]);

// Page Function
export default function App() {
    useEffect(() => {
        window.appAPI.onBootStatus((message: string) => {
            console.log(message);
        });
    }, []);

    return <RouterProvider router={Router} />;
};
