# Summary of stock.md

The `stock.rt` file provides a collection of pre-built components that complement the kernel message-passing system. Here's a summary of these stock components:

## Utility Components
- **Probe components** (`?A`, `?B`, `?C`): Used for debugging by logging message values and timestamps to the console
- **Trash**: A sink component that consumes messages without processing them (prevents "dropped on floor" errors)

## Flow Control Components
- utility Parts for implementing low-level operations
  - typically not needed by "normal" Parts, mostly used for "systems programming"
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

These stock components provide basic building blocks that can be connected together in the component-based architecture defined in 0d.rt to build more complex functionality. Many of these Parts are very low-level "systems programming" Parts, not meant to be used in the normal course of PBP. I needed to use these Parts to bootstrap this system.
