This prompt is composed of 2 parts:
1. Background information.
2. A request for documentation.

# Background
This project produces a Larson scanner application that runs in a browser.

The project consists of 2 main threads
1. Using the .rt compiler/transpiler to transpile the 9 necessary pieces for making Worker Parts and a mevent kernel for the scanner.
2. Using draw.io to specify the Choreographer Parts for the scanner as diagrams.

`rt` is a Very High Level Language that looks like Python with brace brackets instead of indentation. RT means "recursive text".

RT contains a macro syntax for calling functions written in the host language. Such macro function calls begin with "#" and look like function calls, i.e. function name followed by a list of arguments in parentheses. The actual allowed macro calls are defined by `emit.ohm` and are implemented in the `emitjs.rewrite` emitter associated with `emit.ohm`.

The mainline of the final scanner application is the file `leds.html`. This mainline creates a row of LEDs and includes the generated JSON and JS code via a `<script src="larson.js"></script>` line . `Leds.html` is loaded into a browser and begins to run immediately.

The draw.io file `larson-html.drawio` is the code-generator for the project. When run, it generates the JSON and Javascript code for the scanner application. Both, the JSON and Javascript are bundled together into the file `larson.js`. At present, you run the code generator then manually copy/paste the generated code from the `Javascript` text area and paste it into the file `larson.js`.

## How to generate code for the app
To generate code, you need to start up 3 windows:
1. draw.io
2. a terminal window, in which you run `make`
3. a browswer window, with which you open file `dplwb.html`

Saving the draw.io file (^S or the File menu) should cause the terminal and browser text areas to clear and to begin running `rebuild.bash`. This bash script converts `scanner.drawio` to `scanner.drawio.json` and converts `larson-html.drawio` into `larson-html.drawio.json` then runs the code generator as specified in `larson-html.drawio`.

The code generator should print the names of the files in the browser's "Info" text area as they are being transpiled. The code generator should take about a minute to declare `DONE` in the "Info" text window.

When done, select all of the code in the "Javascript" window and copy it to the clipboard. Paste the code into a file called `larson.js` using a text editor.

## How to run the scanner application
Open a browser on file `leds.html`. The LEDs should turn on in sequence from left to right, then right to left, repeatedly for a while. It stops after some number of cycles.

You can look at the source code for the scanner by opening `scanner.drawio` in a draw.io editor, or any one of the .rt files (see below) in a text editor.

## Code Generator
The `main` tab of `larson-html.drawio` shows 2 main threads.
1. Generate code for the .rt files
2. Generate JSON from `scanner.drawio`

All generated code is bundled together by the `Join Javascript` component and sent to the output port of `main`.

The code generator little-network contains many nested parts ("Choreographer" Parts). Any part not found as another tab in the diagram is assumed to be included in `zd/kernel0d.py`. Any part whose name begins with "$" shells out another process and runs a command which is the name of the part without the first "$" character.

Currently, during bootstrapping, the code generator uses Python as its host language. The scanner application, though, uses Javascript as its host language. The code generator (using Python as the host) transpiles .rt files to Javascript. The input and output languages do not need to be related to the underlying host language, the code generator simply does text-to-text transpilation, it doesn't need to know what the input and output texts mean, it simply rewrites character strings from one form to another.

The code-generation Parts use the shell script `rt/ndsl` to invoke`rt/t2t/nanodsl` which invokes `rt/t2t/lib/t2t.mjs` to do the transpilation work. `rt/ndsl` uses ??.ohm files to parse the input and ??.rewrite files to specify how to rewrite the parsed text.

Parts send strings to their output ports. When errors are detected, error messages are sent to error ports (named "✗") and nothing at all is sent to the output ports.

The main code-generation work is done with `rt/ndsl` using `rt/emit.ohm` and `rt/emitjs.rewrite`.

The bash script `rt/ndsl` invokes the bash script `rt/t2t/nanodsl` which runs the `t2t.mjs` text transpiler in `rt/t2t/lib`.

Because this is a bootstrap, the code-generator uses its own copy of `zd/kernel0d.py` as its message-passing kernel and produces a completely different kernel for the scanner app.

The code generator uses 2 .rt files to generate the kernel for the scanner:
- 0d.rt
- stock.rt.

That newly-generated kernel is joined up with generated code Parts that make up the scanner app:
- count.rt
- monitor.rt
- decode.rt
- reverser.rt
- disable.rt
- main.rt

A sentinnel part `empty.rt` is, also, used for getting timing issues right. It ensures that all of the other files reach the code generator before the sentinnel gets there.


# Request
Write an overivew for this project, based on the attached files. I haven't attached a number of lesser files, due to space restrictions. Infer what their purpose is, but, don't worry about how they are implemented.

- larson-html.drawio
- scanner.drawio
- 0d.rt
- stock.rt
- count.rt
- monitor.rt
- decode.rt
- reverser.rt
- disable.rt
- main.rt
- emit.ohm
- emitjs.rewrite
- internalize.ohm
- internalize.rewrite
- jsdecode.ohm
- jsdecode.rewrite
- semantics.ohm
- semantics.rewrite
- syntax.ohm
- syntax.rewrite

