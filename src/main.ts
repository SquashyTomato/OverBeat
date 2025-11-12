// Import Utils
import BootHandler from './handlers/BootHandler.js';
import WindowHandler from './handlers/WindowHandler.js';

// Create Window Handler Instance
WindowHandler.getInstance();

// Initialize Boot Handler and Start Services
const bootHandler = new BootHandler();
bootHandler.initializeServices();
