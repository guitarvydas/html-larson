const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld(
  'api', {
    // Receive WebSocket messages from main process
    onMessage: (callback) => {
      ipcRenderer.on('ws-message', (event, data) => callback(data));
    },
    
    // Receive WebSocket connection status updates
    onConnectionStatus: (callback) => {
      ipcRenderer.on('ws-connection-status', (event, isConnected) => callback(isConnected));
    },
    
    // Receive WebSocket errors from main process
    onError: (callback) => {
      ipcRenderer.on('ws-error', (event, error) => callback(error));
    },
    
    // Receive WebSocket info messages
    onInfo: (callback) => {
      ipcRenderer.on('ws-info', (event, info) => callback(info));
    },
    
    // Receive file change notifications
    onFileChanged: (callback) => {
      ipcRenderer.on('file-changed', (event, path) => callback(path));
    },
    
    // Receive file added notifications
    onFileAdded: (callback) => {
      ipcRenderer.on('file-added', (event, path) => callback(path));
    },
    
    // Receive watched file path updates
    onWatchedFileUpdate: (callback) => {
      ipcRenderer.on('update-watched-file', (event, path) => callback(path));
    },
    
    // Receive rebuild script status updates
    onRebuildStarted: (callback) => {
      ipcRenderer.on('rebuild-started', (event) => callback());
    },
    
    onRebuildCompleted: (callback) => {
      ipcRenderer.on('rebuild-completed', (event, stdout) => callback(stdout));
    },
    
    onRebuildError: (callback) => {
      ipcRenderer.on('rebuild-error', (event, error) => callback(error));
    },
    
    onRebuildStderr: (callback) => {
      ipcRenderer.on('rebuild-stderr', (event, stderr) => callback(stderr));
    },
    
    // Run rebuild script manually
    runRebuild: () => {
      ipcRenderer.send('run-rebuild');
    }
  }
);
