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
	
