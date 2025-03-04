// Test script for sending messages to the Electron app
const WebSocket = require('ws');

// Wait for command line arguments
const args = process.argv.slice(2);
const mode = args[0] || 'test';

// Connect to WebSocket server
const ws = new WebSocket('ws://localhost:8965');

ws.on('open', function open() {
  console.log('Connected to WebSocket server');
  
  let message;
  
  switch (mode) {
    case 'reset':
      message = [{"": "reset"}];
      break;
      
    case 'error':
      message = [{"✗": "This is a test error message"}];
      break;
      
    case 'multi':
      message = [
        {"Javascript": "console.log('Test message 1');"},
        {"Python": "print('Test message 1')"},
        {"Info": "<div>Test information message</div>"}
      ];
      break;
      
    default:
      // Default test message
      message = [
        {"Javascript": "// Test message from WebSocket\nconsole.log('Hello from test script');"},
        {"Python": "# Test message from WebSocket\nprint('Hello from test script')"},
        {"CommonLisp": "; Test message from WebSocket\n(format t \"Hello from test script\")"},
        {"WASM": ";; WebAssembly test message"},
        {"Info": "<div>WebSocket test completed successfully</div>"}
      ];
      break;
  }
  
  console.log(`Sending message: ${JSON.stringify(message)}`);
  ws.send(JSON.stringify(message));
  
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
