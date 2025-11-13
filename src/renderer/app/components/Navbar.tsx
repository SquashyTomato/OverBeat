// Import Modules
import { NavLink } from 'react-router-dom';

// Import Components
import ProcessStatusIndicator from "./ProcessStatusIndicator.tsx";

// Component Function
export default function Component() {
    return (
        <nav className="flex items-center justify-between bg-stone-800/50 border-b border-stone-800/80 px-4 py-2">
            <div>
                <h1 className="text-xl font-serif font-semibold text-stone-50">OverBeat</h1>
            </div>
            <div className="flex space-x-6">
                <NavLink to="/" className="text-stone-200 hover:text-stone-50">Home</NavLink>
                <NavLink to="/settings" className="text-stone-200 hover:text-stone-50">Settings</NavLink>
            </div>
            <div>
                <ProcessStatusIndicator />
            </div>
        </nav>
    );
};
