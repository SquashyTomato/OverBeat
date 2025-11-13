// Import Modules
import { useState, useRef, useEffect } from 'react';

// Define Types
interface Category {
    id: string;
    name: string;
};

// Define Settings Categories
const categories: Category[] = [
    { id: "general", name: "General" },
    { id: "authentication", name: "Authentication" },
];


// Component Function
export default function Page() {
    const [activeCategory, setActiveCategory] = useState('general');
    const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

    const handleCategoryClick = (id: string) => {
        setActiveCategory(id);
        sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setActiveCategory(entry.target.id);
            });
        }, { rootMargin: "-40% 0px -55% 0px", threshold: 0.1 });

        Object.values(sectionRefs.current).forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className="flex h-full overflow-hidden">
                {/* Sidebar */}
                <aside className="w-64 border-r border-stone-700 p-4 bg-gray-900">
                    <h2 className="text-lg font-semibold mb-4 text-white">Settings</h2>
                    <ul className="space-y-2">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => handleCategoryClick(category.id)}
                                className={`block w-full text-left px-3 py-2 rounded-md transition
                                    ${
                                        activeCategory === category.id ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800"
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </ul>
                </aside>
                {/* Content */}
                <section className="flex-1 overflow-y-auto p-6 space-y-16">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            id={category.id}
                            ref={(el) => {
                                sectionRefs.current[category.id] = el;
                            }}
                        >
                            <h3 className="text-2xl font-bold mb-4">{category.name}</h3>
                            <div className="space-y-3">
                                <p>Settings for <strong>{category.name}</strong> go here.</p>
                                <div className="bg-gray-800 p-4 rounded-lg">Example control</div>
                                <div className="bg-gray-800 p-4 rounded-lg">Another option</div>
                                <div className="bg-gray-800 p-4 rounded-lg">Another option</div>
                                <div className="bg-gray-800 p-4 rounded-lg">Another option</div>
                                <div className="bg-gray-800 p-4 rounded-lg">Another option</div>
                                <div className="bg-gray-800 p-4 rounded-lg">Another option</div>
                                <div className="bg-gray-800 p-4 rounded-lg">Another option</div>
                                <div className="bg-gray-800 p-4 rounded-lg">Etc…</div>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </>
    );
};
