# Summary of scanner Leaf (Worker) Parts:

The Leaf Parts are written in the `.rt` VHLL. The code generator converts this to Javascript code.

[The generated code becomes part of the final output that is copied into `larson.js`].

## Worker Components

1. **Count**
   - Maintains a counter and direction of counting
   - Increments or decrements the counter when receiving an "adv" message
   - Reverses counting direction when receiving a "rev" message

2. **Monitor**
   - Toggles display elements on or off based on numeric input
   - Handles "reset" messages to turn elements off

3. **Decode**
   - Processes numeric input (0-9) and routes messages accordingly
   - Sends the input value to the matching output port
   - Always sends a "done" signal after processing

4. **Reverser**
   - Alternates between states "J" and "K"
   - Changes state and outputs a message when receiving input on the opposite port

5. **Divider**
   - Counts incoming messages and outputs a message every DIVIDERCOUNT inputs
   - Maintains an internal counter that resets after reaching the threshold

6. **Disable**
   - Outputs sequential numbers from 0 to 9 on corresponding ports

## Main Function

The file `main.rt` is converted to a Javascript `main()` function that:
1. Initializes the system from a string configuration
2. Installs all the worker components into the component registry
3. Starts execution with the "main" container
4. Logs the beginning and end of execution

These files extend the component library with specialized workers focused on counting, state management, and signal processing within the reactive message-passing architecture.
