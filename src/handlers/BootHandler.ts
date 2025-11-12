// Import Modules
import { BrowserWindow } from 'electron';

// Import Utils
import HttpHandler from './HttpHandler.js';
import WindowHandler from './WindowHandler.js';

// Module Class
export default class BootHandler {
    private mainWindow: BrowserWindow | null = null;

    public constructor() {};

    public async initializeServices(): Promise<void> {
        // Await Window Handler Initialization
        const windowHandler = WindowHandler.getInstance();
        this.mainWindow = await windowHandler.windowReady;
        this.log('Boot Handler Initialized');

        // Initialize HTTP Handler
        const httpHandler = HttpHandler.getInstance({
            httpHost: 'localhost',
            httpPort: 3000
        });
        httpHandler.listen();
        this.log('HTTP Handler Initialized');
    };

    private log(message: string): void {
        console.log(`[BootHandler] ${message}`);
        this.mainWindow?.webContents.send('boot:status', message);
    };
};
