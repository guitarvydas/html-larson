const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld(
  'api', {
    // Receive WebSocket messages from main process
    onWSMessage: (callback) => {
      ipcRenderer.on('ws-message', (event, message) => callback(message));
    },
    
    // Receive WebSocket errors from main process
    onWSError: (callback) => {
      ipcRenderer.on('ws-error', (event, error) => callback(error));
    },
    
    // Send messages to WebSocket server via main process
    sendWSMessage: (message) => {
      ipcRenderer.send('send-ws-message', message);
    }
  }
);
