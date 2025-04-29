# Larson Scanner Project

![layer 1](./doc/scanner-layer1.png)

![layer 2](./doc/scanner-layer2.png)

This project implements a Larson Scanner in a browser, using source code written as diagrams in draw.io.

The Larson scanner app creates a classic "Knight Rider" style back-and-forth light pattern using a component-based message-passing architecture. See doc/larson.md for how all the pieces fit together:

The main thrust of this example is to show how to generate a browser app using diagrams as code. To accomplish this, the code needs to rely on a coroutining kernel written in Javascript. (supplied)

All of the code, except for the (minimal) HTML file `leds.html` is generated from diagrams and/or from textual code written in a Very High Level language (working name `.rt` for "recursive text"). The code generator is included in this project.

# Documentation
see doc/START-HERE.md

# Code Generation
Most of the textual code is written in `.rt` files. 

RT (Recursive text) is a VHLL that compiles to several target languages at once (Javascript, Python, Common Lisp). This project uses only the Javascript part of the code generator. RT and the multi-language RT transpiler are documented elsewhere.


# usage
- open code-generator.drawio (in draw.io)
- open a new terminal window, 
  - `source dw/bin/activate` (set up Python environment that includes websockets)
  - `make`
- open a browser and open file dplwb.html (it connects to the websocket generated in the terminal window)
- click on `code-generator.drawio` diagram (1st window), hit SAVE (command-S or control-S (Mac vs. Linux))
- watch compiler generate messages in the browser window
- when "Info" says "...end",
  - manually copy generated Javascript code to larson.js
- in the browser in a new tab, open file `leds.html`
  - you should see 10 LEDs
  - the LEDs should sweep red from left-right then right-to-left a few times, then stop

## utilities

`./zd/lu.py "message"`
	- makes "message" appear in "Info" text area of dplwb.html as long as choreographer.py is running
	
