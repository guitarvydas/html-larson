#!/bin/bash

# lu.sh - Live Update WebSocket debugging script
# Sends messages to WebSocket server at port 8965

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is required but not installed."
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

# Make sure websocket-debug.js exists in the same directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
DEBUG_SCRIPT="$SCRIPT_DIR/websocket-debug.js"

if [ ! -f "$DEBUG_SCRIPT" ]; then
    echo "Error: websocket-debug.js not found in $SCRIPT_DIR"
    exit 1
fi

# Install ws module if not already installed
if ! node -e "require('ws')" &> /dev/null; then
    echo "Installing required WebSocket module..."
    npm install ws
fi

# Pass all arguments to the Node.js script
node "$DEBUG_SCRIPT" "$@"
