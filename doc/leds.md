# Summary of leds.html

This HTML file creates a visual Larson Scanner - a series of LEDs that light up in sequence to create a back-and-forth sweeping effect (similar to the red light in Knight Rider or Battlestar Galactica).

## Structure and Visual Elements
- Creates a row of 10 LED elements (numbered 0-9)
- LEDs are styled as round circles with a glowing effect when activated
- The inactive state is gray, while the active state is red with a glow effect

## JavaScript Functionality
- Defines two core functions:
  - `turn_on(n, s)`: Activates the LED at position n by adding the "on" class
  - `turn_off(n, s)`: Deactivates the LED by removing the "on" class
- Includes external JavaScript from "larson.js" (which likely contains the component system)
- Implements a main animation loop with `requestAnimationFrame` that:
  - Calls `inject_tick()` to advance the animation state
  - Limits execution to 1000 loops to prevent freezing
  - Calls the main initialization function

This page serves as the visual interface for the component-based scanner system, displaying the output of the message-passing network defined in the choreographers.json file. The LEDs visually represent the state of the Monitor components that receive messages from the Decode component.
