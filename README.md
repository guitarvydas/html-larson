# Larson Scanner Implementation Analysis

## Overview
This codebase implements a Larson Scanner (also known as a "Knight Rider" display) - a visual effect where LEDs light up in sequence to create a back-and-forth sweeping pattern. The implementation uses a component-based architecture with a web interface for visualization.

## File Structure

### 1. larson.js
A complex JavaScript implementation that provides the core functionality using a component-based architecture.

#### Key Components:

1. **Base Infrastructure**
   - `Datum`: Core data structure for passing messages
   - `Mevent`: Message event system for component communication
   - `Component_Registry`: Registry for managing components
   - `Eh` (Event Handler): Base component class

2. **Scanner Components**
   - `Count`: Maintains counter for LED position
   - `Decode`: Converts numbers to LED positions
   - `Reverser`: Handles direction changes
   - `Divider`: Controls timing/speed
   - `Monitor`: Handles LED state management
   - `Disable`: Controls LED deactivation

3. **Component Communication**
   - Uses a message-passing architecture
   - Components communicate through ports
   - Supports down, across, up, and through connections

4. **State Management**
   - Maintains LED states
   - Handles direction reversals
   - Controls scanning speed

### 2. leds.html
A web interface for visualizing the Larson Scanner effect.

#### Key Features:

1. **Visual Elements**
   - 10 LED elements styled with CSS
   - Smooth transitions for LED state changes
   - Glowing effect for active LEDs

2. **JavaScript Integration**
   - `turn_on(n, s)`: Activates LED at position n
   - `turn_off(n, s)`: Deactivates LED at position n
   - Animation loop with frame rate limiting
   - Integration with larson.js core logic

## Technical Implementation Details

### Component Architecture
The system uses a sophisticated component architecture with:
- Hierarchical component organization
- Message-based communication
- Event-driven updates
- State management per component

### Data Flow
1. Counter increments/decrements position
2. Decoder converts position to LED states
3. Reverser changes direction at endpoints
4. Monitor updates LED visual states
5. Divider controls timing

### State Management
- Each LED can be on/off
- Direction state (forward/reverse)
- Counter for position tracking
- Component activity states

## Notable Features

1. **Modular Design**
   - Components are independently instantiated
   - Clean separation of concerns
   - Reusable component architecture

2. **Visual Effects**
   - Smooth LED transitions
   - Glowing effect on active LEDs
   - Configurable timing

3. **Performance Considerations**
   - Frame rate limiting
   - Efficient state updates
   - Browser animation frame synchronization

4. **Error Handling**
   - Component validation
   - Port validation
   - State consistency checks

## Usage Patterns

The system initializes through:
1. Component registration
2. HTML interface setup
3. Animation loop initialization
4. Message passing between components

The scanner effect is achieved through coordinated state changes and LED updates, creating a smooth back-and-forth scanning pattern typical of a Larson Scanner.


---
# Larson Scanner Design Analysis

## Overview
The provided design implements a Larson Scanner (also known as a Cylon Eye or Knight Rider scanner), which creates a back-and-forth sweeping light pattern across a series of LEDs. The implementation uses a component-based architecture with visual feedback through a web interface.

## System Architecture

### Main Components Hierarchy
1. **Main Container**
   - Divider → Controls timing/speed
   - Larson → Core scanner logic
   - Trash → Output sink

2. **Larson Container**
   - Count → Position counter
   - Reverser → Direction control
   - Decode → LED pattern decoder
   - Multiple "@" nodes → LED outputs
   - 1then2 → Sequencing control
   - Disable → LED reset control

### Component Details

#### Core Components
1. **Divider**
   - Acts as a clock divider
   - Controls the scanning speed
   - Connects to Larson's tick input

2. **Count**
   - Maintains position counter
   - Inputs:
     - `adv`: Advance signal
     - `rev`: Reverse direction
   - Connected to 1then2 for sequencing

3. **Reverser**
   - Controls scanning direction
   - Ports:
     - `J`: Forward state
     - `K`: Reverse state
   - Connected to Decode's outputs for direction changes

4. **Decode**
   - Converts counter value to LED patterns
   - Input: `N` (number)
   - Outputs: 0-9 for individual LEDs
   - `done` signal for completion

5. **1then2**
   - Sequencing control
   - Manages counter-to-decoder synchronization
   - Connected to both Count and Decode

#### LED Control
1. **@ Nodes**
   - Represent individual LED controls
   - 10 instances (LED0-LED9)
   - Include reset capability

2. **Disable**
   - Manages LED reset functionality
   - Connected to all @ nodes
   - Provides coordinated reset signals

### Signal Flow

1. **Main Path**
```
Divider → Larson(tick) → Count → 1then2 → Decode → LED Outputs
```

2. **Direction Control**
```
Decode(0,9) → Reverser → Count(rev)
```

3. **Reset Path**
```
1then2 → Disable → @ nodes(reset)
```

## Implementation Details

### Timing
- Divider component controls overall scanning speed
- Count advances on each divided clock tick
- Direction reversal occurs at endpoints (0 and 9)

### LED Pattern Generation
1. Counter maintains position (0-9)
2. Decoder converts position to LED pattern
3. Individual LED nodes receive activation signals
4. Reset signals clear previous states

### Web Interface (leds.html)
- 10 LED elements with CSS styling
- LED class for visual representation
- Glow effect for active state
- JavaScript functions:
  - `turn_on(n)`: Activate LED n
  - `turn_off(n)`: Deactivate LED n

### Component Communication
- Uses message-based architecture
- Direction-based routing (down, across, up)
- Port-based connections between components

## Behavioral Characteristics

1. **Scanning Pattern**
   - Left-to-right sweep
   - Direction reversal at endpoints
   - Continuous operation

2. **LED States**
   - Single LED active at a time
   - Smooth transitions
   - Coordinated reset capability

3. **Timing Control**
   - Adjustable through divider
   - Synchronized state changes
   - Controlled direction reversals

## Notable Design Features

1. **Modularity**
   - Clear component separation
   - Independent functionality
   - Well-defined interfaces

2. **State Management**
   - Coordinated reset capability
   - Direction control
   - Position tracking

3. **Visual Feedback**
   - Real-time LED display
   - Smooth transitions
   - Professional appearance
---



# Manually Written

# Larson Scanner Transpiler
Generates Python, Javascript and Common Lisp versions of working Larson scanner code from a diagram (scanner.drawio)

Generates code from larson.drawio (see below) that runs the diagram `scanner.drawio` using Worker parts that are written in .rt (count.rt, decode.rt, delay.rt, main.rt, monitor.rt, reverser.tr, empty.rt).

RT is a VHLL syntax that looks kind of like Python, but allows the transpiler to generate code in at least 3 different languages (probably more) Javascript, Python, Common Lisp.

# How it works
There are 2 parts to this project
1. the transpiler
2. the Larson Scanner program.

The transpiler - in essence a compiler - is written using a syntax that consists of a set of diagrams, found in larson-*-json.drawio.

The transpiler does 2 things:
1. reads the 7 .rt files and generates Python/Javascript/Common Lisp code from them
2. reads the Scanner program - scanner.drawio - and transpiles it to JSON. The JSON represents a little-network (`lnet`) of Parts that boil down, recursively, to actual work done by the 7 .rt program files. I use the word `Choreographer` to mean a little network. I use the word `Worker` to mean code transpiled from the above 7 .rt programs. `Choreographer` Parts can contain one or more `Choreographer` Parts and `Worker` Parts. `Worker` Parts contain only code. `Choreographer` Parts are recursively defined. `Worker` Parts are not recursively defined (if you know Lisp, you might analogously think about Lists and Atoms).

Once larson-*.drawio has been compiled, you can run the Scanner program in one of the 3 target languages. The subdirectories py/, js/, cl/ are working directories for such runs. At present you have to manually copy code from the corresponging transpiler browser window into the corresponding `worker.*` file then run `make`. The 0D `kernel0d.*` have been manually copied from the ~projects/rt/generated directory.




# 2 versions or the transpiler:
1. transpile larson-separate-json.drawio to larson.drawio.json, generate code that reads the file
2. transpile larson-embed-json.drawio into JSON, then embed the JSON as a constant in the generated file
	
# usage
- open larson-separate-json.drawio (in draw.io)
- open a terminal window, run `make` (or `make separate` or `make embedded`, default is `make separate`)
- open a browser and open file dplwb.html (it should connect to the websocket generated in the terminal window
- click on drawio diagram, hit SAVE (command-S or control-S (Mac vs. Linux))
- watch compiler generate messages in the browser window
- when "Info" says "...end",
  - copy generated Python code to ./py/workers.py
  - copy generated Javascript code to ./js/workers.js
  - copy generated Common Lisp code to ./cl/workers.lisp
- cd to version of choice, either py/ or js/ or cl/, run make


## versions
larson-separate-json.drawio
larson-embed-json.drawio

There are minor differences in the way that the pipelines are generated - see the corresponding diagrams.

## utilities

$ ./zd/lu.py "message"
	- makes "message" appear in "Info" text area of dplwb.html as long as choreographer.py is running
	
