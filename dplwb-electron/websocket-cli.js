#!/usr/bin/env node

const WebSocket = require('ws');

// Handle command line arguments
const args = process.argv.slice(2);

function printUsage() {
  console.log('WebSocket Debug CLI Tool');
  console.log('------------------------');
  console.log('Usage:');
  console.log('  node websocket-debug.js <key> <value>');
  console.log('  node websocket-debug.js --raw <json-message>');
  console.log('  node websocket-debug.js --multi <key1>=<value1> <key2>=<value2> ...');
  console.log('\nExamples:');
  console.log('  node websocket-debug.js Javascript "console.log(\'Hello\')"');
  console.log('  node websocket-debug.js --raw \'[{"Javascript":"console.log(\'Hello\')"}]\'');
  console.log('  node websocket-debug.js --multi Javascript="console.log(\'Hi\')" Python="print(\'Hello\')"');
  process.exit(1);
}

if (args.length === 0) {
  printUsage();
}

function sendWebSocketMessage(message) {
  console.log(`Connecting to WebSocket server at ws://localhost:8965...`);
  
  const ws = new WebSocket('ws://localhost:8965');
  
  ws.on('open', function() {
    console.log('Connection established');
    console.log(`Sending message: ${message}`);
    
    // Send the message once connection is established
    ws.send(message);
    
    // Close the connection after sending
    setTimeout(() => {
      console.log('Closing connection...');
      ws.close();
    }, 1000);
  });
  
  ws.on('error', function(error) {
    console.error('WebSocket error:', error);
    process.exit(1);
  });
  
  ws.on('close', function() {
    console.log('WebSocket connection closed');
    process.exit(0);
  });
}

// Process arguments and send message
if (args[0] === '--help' || args[0] === '-h') {
  printUsage();
} else if (args[0] === '--raw' || args[0] === '-r') {
  if (args.length < 2) {
    console.error('Error: Missing JSON message');
    printUsage();
  }
  // Send raw JSON message
  sendWebSocketMessage(args[1]);
} else if (args[0] === '--multi' || args[0] === '-m') {
  if (args.length < 2) {
    console.error('Error: Missing key=value pairs');
    printUsage();
  }
  
  const messageObj = {};
  
  for (let i = 1; i < args.length; i++) {
    const pair = args[i].split('=');
    if (pair.length !== 2) {
      console.error(`Error: Invalid key=value pair: ${args[i]}`);
      printUsage();
    }
    messageObj[pair[0]] = pair[1];
  }
  
  // Send as array with single object (similar to choreographer.py format)
  sendWebSocketMessage(JSON.stringify([messageObj]));
} else {
  // Simple key-value mode
  if (args.length !== 2) {
    console.error('Error: Expected key and value arguments');
    printUsage();
  }
  
  const key = args[0];
  const value = args[1];
  
  // Format as array with single object (similar to choreographer.py format)
  const message = JSON.stringify([{ [key]: value }]);
  sendWebSocketMessage(message);
}
