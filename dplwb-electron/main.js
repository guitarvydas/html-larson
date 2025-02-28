const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const WebSocket = require('ws');

// Keep a global reference of the window object to prevent garbage collection
let mainWindow;

// WebSocket server for communication
let wss = null;
const WS_PORT = 8965;

function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // Load the index.html file
  mainWindow.loadFile('index.html');

  // Open DevTools in development mode
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }

  // Emitted when the window is closed
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Create window when app is ready
app.whenReady().then(() => {
  createWindow();
  setupWebSocketServer();

  app.on('activate', () => {
    // On macOS, recreate a window when dock icon is clicked and no windows are open
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    if (wss) {
      wss.close();
    }
    app.quit();
  }
});

// Set up WebSocket server
function setupWebSocketServer() {
  try {
    wss = new WebSocket.Server({ port: WS_PORT });
    
    wss.on('connection', (ws) => {
      console.log('WebSocket client connected');
      
      // Forward messages from clients to the renderer process
      ws.on('message', (message) => {
        if (mainWindow && !mainWindow.isDestroyed()) {
          mainWindow.webContents.send('ws-message', message.toString());
        }
      });
      
      // Handle WebSocket errors
      ws.on('error', (error) => {
        console.error('WebSocket error:', error);
      });
      
      // Handle client disconnection
      ws.on('close', () => {
        console.log('WebSocket client disconnected');
      });
    });
    
    // Handle server errors
    wss.on('error', (error) => {
      console.error('WebSocket server error:', error);
      if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.webContents.send('ws-error', error.message);
      }
    });
    
    console.log(`WebSocket server started on port ${WS_PORT}`);
  } catch (error) {
    console.error('Failed to start WebSocket server:', error);
  }
}

// Handle IPC messages from renderer
ipcMain.on('send-ws-message', (event, message) => {
  if (wss) {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  }
});
