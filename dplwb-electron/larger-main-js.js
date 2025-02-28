function createWindow() {
  // Create the browser window with much larger size for Mac
  mainWindow = new BrowserWindow({
    width: 1440,    // Increased from 1280
    height: 900,    // Increased from 800
    minWidth: 1200,
    minHeight: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // Load the index.html file
  mainWindow.loadFile('index.html');

  // Window closed event
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}
