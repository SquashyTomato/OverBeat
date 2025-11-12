// Component Function
export default function Component() {
    return (
        <nav className="flex items-center justify-between bg-stone-800/50 border-b border-stone-800/80 px-4 py-2">
            <div>
                <h1 className="text-xl font-serif font-semibold text-stone-50">OverBeat</h1>
            </div>
            <div className="flex space-x-6">
                <a href="#" className="text-stone-200 hover:text-stone-50">Home</a>
                <a href="#" className="text-stone-200 hover:text-stone-50">Tournament</a>
                <a href="#" className="text-stone-200 hover:text-stone-50">Stream</a>
                <a href="#" className="text-stone-200 hover:text-stone-50">Overlay</a>
                <a href="#" className="text-stone-200 hover:text-stone-50">Settings</a>
            </div>
            <div>
                <button className="bg-stone-600 text-stone-50 text-sm px-3 py-1 rounded">All Services OK</button>
            </div>
        </nav>
    );
};
