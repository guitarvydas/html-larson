# Summary of stock.js

The stock.js file provides a collection of pre-built components that complement the kernel.js message-passing system. Here's a summary of these stock components:

## Utility Components
- **Probe components** (`?A`, `?B`, `?C`): Used for debugging by logging message values and timestamps to the console
- **Trash**: A sink component that consumes messages without processing them (prevents "dropped on floor" errors)

## Flow Control Components
- **Deracer (1then2)**: Ensures messages arrive in a specific order by buffering them until both are received
- **Switch1***: Routes messages to different outputs based on an internal state
- **Latch**: Stores a message until triggered to release it

## String Manipulation
- **StringConcat**: Concatenates two string inputs and outputs the result
- **String Constant**: Outputs a predefined string value
- **Ensure String Datum**: Verifies a message contains a string, outputting an error if not

## File Operations
- **Read Text File**: Reads text content from a file
- **SyncFileWrite**: Writes data to a file synchronously
- **FakePipeName**: Generates a unique temporary pipe name (like "/tmp/fakepipe123")

The file also includes supporting utility functions such as `send_int()`, `send_bang()`, and handlers that implement the behavior of each component.

These stock components provide basic building blocks that can be connected together in the component-based architecture defined in kernel.js to build more complex functionality.
