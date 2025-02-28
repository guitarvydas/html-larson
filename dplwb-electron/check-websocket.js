// Save this as check-websocket.js
const WebSocket = require('ws');
const net = require('net');

// Function to check if a port is in use
function checkPort(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    
    server.once('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        // Port is in use
        resolve(true);
      } else {
        // Some other error
        resolve(false);
      }
    });
    
    server.once('listening', () => {
      // Port is free, close the server
      server.close();
      resolve(false);
    });
    
    server.listen(port);
  });
}

// Function to check WebSocket server
async function checkWebSocketServer() {
  console.log('Checking if port 8965 is in use...');
  
  const portInUse = await checkPort(8965);
  
  if (!portInUse) {
    console.log('Port 8965 is NOT in use. No WebSocket server is running on this port.');
    return;
  }
  
  console.log('Port 8965 is in use. Attempting to connect as a WebSocket client...');
  
  try {
    const ws = new WebSocket('ws://localhost:8965');
    
    ws.on('open', () => {
      console.log('Successfully connected to WebSocket server on port 8965!');
      
      // Send a test message
      const testMessage = JSON.stringify([
        { "Test": "This is a test message from check-websocket.js" }
      ]);
      
      ws.send(testMessage);
      console.log('Test message sent');
      
      // Close after 2 seconds
      setTimeout(() => {
        ws.close();
        console.log('Test complete, connection closed');
      }, 2000);
    });
    
    ws.on('message', (data) => {
      console.log('Received message from server:', data.toString());
    });
    
    ws.on('error', (err) => {
      console.error('WebSocket connection error:', err.message);
      console.log('This suggests that something is using port 8965, but it\'s not a WebSocket server');
    });
  } catch (err) {
    console.error('Error creating WebSocket client:', err);
  }
}

checkWebSocketServer();
