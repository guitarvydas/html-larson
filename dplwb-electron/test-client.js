// Save this as test-client.js and run with Node.js
const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8965');

ws.on('open', function open() {
  console.log('Connected to the DPLWB app!');
  
  // Send a test message
  const testMessage = JSON.stringify([
    {
      "Javascript": "console.log('Hello from test client');",
      "Python": "print('Hello from test client')"
    }
  ]);
  
  ws.send(testMessage);
  console.log('Test message sent');
  
  // Send another message after 2 seconds
  setTimeout(() => {
    const secondMessage = JSON.stringify([
      {
        "CommonLisp": "(princ \"Another test message\")",
        "WASM": ";; WebAssembly test"
      }
    ]);
    ws.send(secondMessage);
    console.log('Second message sent');
  }, 2000);
});

ws.on('message', function incoming(data) {
  console.log('Received message from server:', data.toString());
});

ws.on('error', function error(err) {
  console.error('Connection error:', err);
});

ws.on('close', function close() {
  console.log('Connection closed');
});

// Keep the process running for a while
setTimeout(() => {
  ws.close();
  console.log('Test complete, connection closed');
}, 10000);
