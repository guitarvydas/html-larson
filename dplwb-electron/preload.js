const { contextBridge } = require('electron');

// Expose a minimal API to the renderer process
contextBridge.exposeInMainWorld(
  'api', {
    // Add minimal functionality here
    getVersion: () => process.versions.electron
  }
);
