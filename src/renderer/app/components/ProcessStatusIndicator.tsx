// Import Modules
import { useEffect, useState } from 'react';

// Define Types
type BootStatus = 'ok' | 'warning' | 'critical';

// Component Function
export default function Component() {
    const [status, setStatus] = useState<BootStatus>('ok');
    const [message, setMessage] = useState<string>('Initializing...');

    useEffect(() => {
        if (!window.appAPI) return;

        window.appAPI.onBootStatus((message: string) => {
            setMessage(message);

            if (message.includes('CRITICAL')) setStatus('critical');
            else if (message.includes('WARNING')) setStatus('warning');
            else setStatus('ok');
        });

        window.appAPI.onBootComplete(() => {
            setStatus('ok');
            setMessage('All services running!');
        });
    }, []);

    const color = {
        ok: 'bg-green-500',
        warning: 'bg-orange-500',
        critical: 'bg-red-500',
    } [status];

    return (
        <button className="flex items-center bg-stone-600 text-stone-50 px-3 py-1 space-x-2 rounded-lg">
            <div className={`w-3 h-3 rounded-full ${color} animate-pulse`}></div>
            <span className="text-sm">{message}</span>
        </button>
    );
};
