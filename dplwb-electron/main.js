const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const chokidar = require('chokidar');
const WebSocket = require('ws');

// Keep a global reference of the window object
let mainWindow;
let wss = null;
const WS_PORT = 8965;
const FILE_TO_WATCH = '../larson-html.drawio';

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
  
  // Open DevTools for debugging
  // mainWindow.webContents.openDevTools();

  // Window closed event
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Create window when Electron is ready
app.whenReady().then(() => {
  createWindow();
  setupWebSocketServer();
  setupFileWatcher();
  
  app.on('activate', () => {
    // On macOS, recreate window when dock icon is clicked
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
    console.log(`Starting WebSocket server on port ${WS_PORT}...`);
    
    wss = new WebSocket.Server({ 
      host: 'localhost',
      port: WS_PORT 
    });
    
    console.log('WebSocket server started successfully');
    
    wss.on('connection', (ws) => {
      console.log('WebSocket client connected');
      
      // Notify renderer process about the connection
      if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.webContents.send('ws-connection-status', true);
      }
      
      // Forward messages from clients to the renderer process
      ws.on('message', (message) => {
        console.log(`Received WebSocket message (${message.length} bytes)`);
        
        try {
          const data = JSON.parse(message.toString());
          if (mainWindow && !mainWindow.isDestroyed()) {
            mainWindow.webContents.send('ws-message', data);
          }
        } catch (error) {
          console.error('Error parsing WebSocket message:', error);
          if (mainWindow && !mainWindow.isDestroyed()) {
            mainWindow.webContents.send('ws-error', `Parse error: ${error.message}`);
          }
        }
      });
      
      // Handle connection errors
      ws.on('error', (error) => {
        console.error('WebSocket connection error:', error);
        if (mainWindow && !mainWindow.isDestroyed()) {
          mainWindow.webContents.send('ws-error', error.message);
        }
      });
      
      // Handle disconnection
      ws.on('close', () => {
        console.log('WebSocket client disconnected');
        if (mainWindow && !mainWindow.isDestroyed()) {
          mainWindow.webContents.send('ws-connection-status', false);
        }
      });
    });
    
    // Handle server errors
    wss.on('error', (error) => {
      console.error('WebSocket server error:', error);
      if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.webContents.send('ws-error', error.message);
      }
    });
  } catch (error) {
    console.error('Failed to start WebSocket server:', error);
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send('ws-error', `Server error: ${error.message}`);
    }
  }
}

// Set up file watcher with improved path handling
function setupFileWatcher() {
  try {
    // Resolve the absolute path to the file
    const absolutePath = path.resolve(__dirname, FILE_TO_WATCH);
    console.log(`Setting up file watcher for ${absolutePath}...`);
    
    // Log file existence before watching
    if (fs.existsSync(absolutePath)) {
      console.log(`File exists at ${absolutePath}`);
      if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.webContents.send('ws-info', `Watching file: ${absolutePath}`);
      }
    } else {
      console.log(`Warning: File ${absolutePath} does not exist yet`);
      if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.webContents.send('ws-info', `Waiting for file to be created: ${absolutePath}`);
      }
    }
    
    // Update display
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send('update-watched-file', absolutePath);
    }
    
    // Set up the watcher with improved options
    const watcher = chokidar.watch(absolutePath, {
      persistent: true,
      ignoreInitial: false,  // Check the file on startup
      awaitWriteFinish: {
        stabilityThreshold: 2000,
        pollInterval: 100
      },
      alwaysStat: true       // Always provide stats with change events
    });
    
    watcher.on('add', (path) => {
      console.log(`File ${path} has been added`);
      if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.webContents.send('file-added', path);
        // Run rebuild on initial add
        runRebuildScript();
      }
    });
    
    watcher.on('change', (path, stats) => {
      console.log(`File ${path} has been changed`);
      console.log(`Last modified time: ${stats ? stats.mtime : 'unknown'}`);
      
      if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.webContents.send('file-changed', path);
      }
      
      runRebuildScript();
    });
    
    watcher.on('error', (error) => {
      console.error(`Watcher error: ${error}`);
      if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.webContents.send('ws-error', `Watcher error: ${error}`);
      }
    });
    
    // Log ready state
    watcher.on('ready', () => {
      console.log('Initial scan complete. Ready for changes');
      if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.webContents.send('ws-info', 'File watcher is ready');
      }
    });
    
    console.log('File watcher set up successfully');
  } catch (error) {
    console.error('Failed to set up file watcher:', error);
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send('ws-error', `Watcher error: ${error.message}`);
    }
  }
}

// Run rebuild.bash script
function runRebuildScript() {
  console.log('Running rebuild.bash...');
  
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.webContents.send('rebuild-started');
  }
  
  exec('./rebuild.bash', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing rebuild.bash: ${error.message}`);
      if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.webContents.send('rebuild-error', error.message);
      }
      return;
    }
    
    if (stderr) {
      console.error(`rebuild.bash stderr: ${stderr}`);
      if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.webContents.send('rebuild-stderr', stderr);
      }
    }
    
    console.log(`rebuild.bash stdout: ${stdout}`);
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send('rebuild-completed', stdout);
    }
  });
}

// Handle IPC messages from renderer
ipcMain.on('run-rebuild', () => {
  runRebuildScript();
});

// Log any unhandled exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.webContents.send('ws-error', `Uncaught Exception: ${error.message}`);
  }
});
