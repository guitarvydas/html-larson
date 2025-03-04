import asyncio
import websockets
import json
import time

async def send_test_messages():
    """Send test messages to the Electron app via WebSocket"""
    try:
        uri = "ws://localhost:8965"
        async with websockets.connect(uri) as websocket:
            print(f"Connected to {uri}")
            
            # Send a test message similar to what rebuild.bash might produce
            test_message = [
                {"Javascript": "console.log('Test message from Python');"},
                {"Python": "print('Hello from test script')"},
                {"CommonLisp": "(format t \"Hello from Lisp\")"},
                {"Info": "Test information message"}
            ]
            
            # Convert to JSON and send
            await websocket.send(json.dumps(test_message))
            print("Sent test message 1")
            
            # Wait a moment
            await asyncio.sleep(2)
            
            # Send an error message
            error_message = [
                {"✗": "This is a test error message"}
            ]
            await websocket.send(json.dumps(error_message))
            print("Sent test message 2")
            
            # Wait a moment before closing
            await asyncio.sleep(2)
            
            print("Test completed")
    except Exception as e:
        print(f"Error: {e}")

# Run the test
asyncio.run(send_test_messages())
