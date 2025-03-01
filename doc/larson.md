The Larson scanner app is mainly composed of leds.html and scanner.choreographers.json.

Scanner.choreographers.json uses several worker Parts written in Javascript in the file scanner.workers.js.

The whole system runs on top of a kernel, written in Javascript, consisting of kernel.js and stock.js.

# Larson Scanner App - Component Structure Summary

The Larson scanner app creates a classic "Knight Rider" style back-and-forth light pattern using a component-based message-passing architecture. Here's how all the pieces fit together:

## System Layers

### 1. Display Layer (leds.html)
- Provides the visual interface with 10 LED elements
- Implements `turn_on()` and `turn_off()` functions to control LED states
- Runs the animation loop that periodically triggers the messaging system

### 2. Component Configuration (scanner.choreographers.json)
- Defines the connection structure for the application
- Creates two main containers: "main" and "Larson"
- Specifies how messages flow between components to create the scanning pattern
- Connects Monitor components (@) to the LED display elements

### 3. Worker Components (scanner.workers.js)
- Implements specialized components:
  - **Count**: Maintains position and direction for the scanner
  - **Reverser**: Changes direction at endpoints (0 and 9)
  - **Decode**: Routes position values to correct LED outputs
  - **Monitor**: Interfaces with the display to turn LEDs on/off
  - **Divider**: Controls timing of updates
  - **Disable**: Helps reset the display

### 4. Kernel Layer (kernel.js + stock.js)
- **kernel.js**: Core message-passing framework
  - Manages components, connections, and message routing
  - Handles component lifecycle and message processing
- **stock.js**: Standard library of utility components
  - Provides reusable components like probes and data handlers

## How It Works

1. The animation loop in leds.html triggers periodic ticks
2. Ticks flow to the Divider component which controls timing
3. The Divider sends controlled ticks to the Larson container
4. Inside Larson, the Count component increments a position value
5. The Decode component routes this position to activate the correct LED
6. The Reverser changes direction when reaching position 0 or 9
7. Monitor components control the visual display elements
8. The 1then2 component ensures proper message sequencing
9. The Disable component clears previous LEDs to create clean movement

This application demonstrates the power of component-based, message-passing architecture for creating interactive visual effects with clear separation between display, logic, and framework layers.

