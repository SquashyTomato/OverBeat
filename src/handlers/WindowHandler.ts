// Import Modules
import { app, BrowserWindow, Menu } from 'electron';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// Define Variables for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Module Class
export default class WindowHandler {
    private static instance: WindowHandler | null = null;
    private mainWindow: BrowserWindow | null = null;
    private windowReadyResolve!: (window: BrowserWindow) => void;
    public windowReady: Promise<BrowserWindow>;

    constructor() {
        this.initInstance();
        this.windowReady = new Promise((resolve) => {
            this.windowReadyResolve = resolve;
        });
    };

    public static getInstance = (): WindowHandler => {
        if (!WindowHandler.instance) WindowHandler.instance = new WindowHandler();
        return WindowHandler.instance;
    };

    public initInstance = (): void => {
        app.on('ready', () => this.createWindow());
        app.on('activate', () => this.onActivate());
        app.on('window-all-closed', () => this.onWindowsClosed());
    };

    private onActivate = (): void => {
        if (BrowserWindow.getAllWindows().length === 0) this.createWindow();
    };

    private onWindowsClosed = (): void => {
        app.quit();
    };

    private createWindow = (): void => {
        const isDev = process.env.NODE_ENV === 'development';

        this.mainWindow = new BrowserWindow({
            width: 1280,
            height: 720,
            minWidth: 800,
            minHeight: 600,
            webPreferences: {
                preload: path.join(__dirname, (isDev ? '../preload.js' : '../preload.js')),
                contextIsolation: true,
                nodeIntegration: false,
            },
        });

        this.setupWindow();

        if (isDev) this.mainWindow.loadURL('http://localhost:5173'); // Vite Dev Server URL
        else this.mainWindow.loadFile(path.join(__dirname, '../renderer/index.html')); // Production Build

        this.mainWindow.once('ready-to-show', () => this.windowReadyResolve(this.mainWindow!));
        this.mainWindow.on('closed', () => this.mainWindow = null);
    };

    private setupWindow = (): void => {
        if (!this.mainWindow) return;

        this.mainWindow.setTitle('OverBeat');

        const menu: any[] = [
            {
                label: 'File',
                submenu: [
                    { label: 'Exit', accelerator: 'CmdOrCtrl+Q', role: 'quit' },
                ],
            },
            {
                label: 'View',
                submenu: [
                    { label: 'Reload', accelerator: 'CmdOrCtrl+R', role: 'reload' },
                    { label: 'Toggle Developer Tools', accelerator: 'CmdOrCtrl+I', role: 'toggleDevTools' },
                ],
            }
        ];

        const menuBar = Menu.buildFromTemplate(menu);
        Menu.setApplicationMenu(menuBar);
    };
};
