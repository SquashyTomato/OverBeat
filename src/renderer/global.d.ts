declare global {
    interface Window {
        appAPI: {
            onBootStatus: (callback: (message: string) => void) => void;
            onBootComplete: (callback: () => void) => void;
        };
    }
};

export { };
