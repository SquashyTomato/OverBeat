// Import Modules
import { contextBridge, ipcRenderer } from 'electron';

console.log('[Preload] loaded');

contextBridge.exposeInMainWorld('appAPI', {
    onBootStatus: (callback: (msg: string) => void) =>
        ipcRenderer.on('boot:status', (_event, message) => callback(message)),

    onBootComplete: (callback: () => void) =>
        ipcRenderer.on('boot:complete', callback),
});