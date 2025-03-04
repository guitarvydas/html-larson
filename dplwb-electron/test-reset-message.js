// Test script for sending a reset message to the Electron app
const WebSocket = require('ws');

console.log('Connecting to WebSocket server...');

// Connect to WebSocket server
const ws = new WebSocket('ws://localhost:8965');

ws.on('open', function open() {
  console.log('Connected to WebSocket server');
  
  // Send the reset command
  const resetMessage = [{"": "reset"}];
  console.log(`Sending reset message: ${JSON.stringify(resetMessage)}`);
  ws.send(JSON.stringify(resetMessage));
  
  // Close the connection after a short delay
  setTimeout(() => {
    ws.close();
    console.log('Connection closed');
  }, 1000);
});

ws.on('error', function error(err) {
  console.error('WebSocket error:', err);
  process.exit(1);
});

ws.on('close', function close() {
  console.log('WebSocket connection closed');
  process.exit(0);
});
