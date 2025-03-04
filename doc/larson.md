The Larson scanner app is mainly composed of `leds.html` and `scanner.drawio`. 

Several worker Parts needed by `scanner.drawio` are written in `.rt`. The code generator (`code-generator.drawio`) converts the code to Javascript suitable for use in a browser. Each `.rt` file is fairly short, about 10-20 lines of code. `RT` is like Python that uses curly braces instead of indentation and has provisions for "macros" (#f(...)) that are used for cross-language portability. The code generator can generate code in various languages (Python, JS, Common Lisp at the moment), but, this project only uses the JS part.

- `count.rt`
- `decode.rt`
- `divider.rt`
- `main.rt`
- `monitor.rt`
- `reverser.rt`

[See the `rt` project for the full-blown version of the code generator].

The whole system runs on top of a multi-tasking, message-passing kernel, written in `rt` consisting of `0d.rt` and `stock.rt`. The code generator converts the kernel into JS.

All of the generated code is copied into the file `larson.js`. Currently, you must manually copy/paste the generated code (see ../README.md). It shouldn't be hard to get the code generator to write the generated code out to `larson.js`, but, I don't yet do this.

The drawing `scanner.drawio` is converted to JSON and is, also, included in the generated code.

# Larson Scanner App - Component Structure Summary

The Larson scanner app creates a classic "Knight Rider" style back-and-forth light pattern using a component-based message-passing architecture. Here's how all the pieces fit together:

## System Layers

### 1. Display Layer (leds.html)
- Provides the visual interface with 10 LED elements
- Implements `turn_on()` and `turn_off()` functions to control LED states
- Runs the animation loop that periodically triggers the messaging system

### 2. Component Configuration (scanner.drawio)
- Defines the connection structure for the application
- Creates two main containers: "main" and "Larson"
- Specifies how messages flow between components to create the scanning pattern
- Connects Monitor components (@) to the LED display elements
- diagram converted to JSON to make the diagram parseable by existing tools

### 3. Worker Components (written as .rt files, converted to .js by code generator)
- Implements specialized components:
  - **Count**: Maintains position and direction for the scanner
  - **Reverser**: Changes direction at endpoints (0 and 9)
  - **Decode**: Routes position values to correct LED outputs
  - **Monitor**: Interfaces with the display to turn LEDs on/off
  - **Divider**: Controls timing of updates, slows down animation for human consumption by dividing-down the number of animation  ticks
  - **Disable**: Resets the display on every tick from **Count**

### 4. Kernel Layer (0d.rt + stock.rt, converted to .js by code generator)
- **0d.rt**: Core message-passing framework
  - Manages components, connections, and message routing
  - Handles component lifecycle and message processing
- **stock.rt**: Standard library of utility components
  - Provides reusable components like probes and data handlers

## How It Works

1. The animation loop in leds.html triggers periodic ticks
2. Ticks flow to the Divider component which controls timing
3. The Divider sends controlled ticks to the Larson container
4. Inside Larson, the Count component increments a position value
5. The Decode component routes this position to activate the correct LED
6. The Reverser changes direction when reaching position 0 or 9
7. Monitor components control the visual display elements
8. The 1then2 component ensures proper message sequencing - on output "1" _always_ precedes output "2", regardless of order of arrival
9. The Disable component clears previous LEDs to create clean movement

This application demonstrates the power of component-based, message-passing architecture for creating interactive visual effects with clear separation between display, logic, and framework layers.

## See, also
- `kernel.md`
- `stock.md`
- `leds.md`
- `scanner.md`
- `scanner-leaf-workers.md`
