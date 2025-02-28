function setupWebSocketServer() {
  try {
    console.log(`Attempting to start WebSocket server on port ${WS_PORT}...`);
    
    // Create the WebSocket server with explicit host configuration
    // Note: We're binding only to localhost interfaces
    wss = new WebSocket.Server({ 
      host: '127.0.0.1',  // Only listen on localhost IPv4
      port: WS_PORT 
    });
    
    console.log(`WebSocket server started successfully on port ${WS_PORT}`);
    
    // Connection handler and other event handlers...
    wss.on('connection', (ws) => {
      console.log('WebSocket client connected');
      
      // Notify renderer process about the connection
      if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.webContents.send('ws-connection-status', true);
      }
      
      // Forward messages from clients to the renderer process
      ws.on('message', (message) => {
        console.log(`Received WebSocket message of length: ${message.length}`);
        
        if (mainWindow && !mainWindow.isDestroyed()) {
          mainWindow.webContents.send('ws-message', message.toString());
        }
      });
      
      // Handle WebSocket errors
      ws.on('error', (error) => {
        console.error('WebSocket connection error:', error);
        if (mainWindow && !mainWindow.isDestroyed()) {
          mainWindow.webContents.send('ws-error', error.message);
        }
      });
      
      // Handle client disconnection
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
  }
}
