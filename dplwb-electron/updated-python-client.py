import asyncio
import websockets
import json
import sys

async def send_test_messages():
    """Send test messages to the Electron app via WebSocket"""
    try:
        # Explicitly connect to localhost IPv4
        uri = "ws://127.0.0.1:8965"
        print(f"Attempting to connect to {uri}...")
        
        async with websockets.connect(uri) as websocket:
            print(f"Connected to {uri}")
            
            # Send a test message similar to what rebuild.bash might produce
            test_message = [
                {"Javascript": "console.log('Test message from Python');"},
                {"Python": "print('Hello from test script')"},
                {"Info": "Test information message from Python client"}
            ]
            
            # Convert to JSON and send
            json_str = json.dumps(test_message)
            print(f"Sending message: {json_str}")
            await websocket.send(json_str)
            print("Message sent successfully")
            
            # Wait a moment
            await asyncio.sleep(1)
            
            # Send an error message
            error_message = [
                {"✗": "This is a test error message from Python client"}
            ]
            json_str = json.dumps(error_message)
            await websocket.send(json_str)
            print("Error message sent successfully")
            
            # Keep connection open for a moment to ensure messages are processed
            await asyncio.sleep(2)
            
            print("Test completed successfully")
            
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        print(f"Failed to connect to WebSocket server at {uri}", file=sys.stderr)
        print("Make sure the Electron app is running and the WebSocket server is active", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    print("Starting Python WebSocket test client...")
    asyncio.run(send_test_messages())
