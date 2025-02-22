#!/bin/bash
# compile and run larson.drawio - this DPL program will compile each worker component for Larson and will compile scanner.drawio, then display a single file containing all of he this code
./zd/lu.py "1. node"
node das2json.js <scanner.drawio >scanner.drawio.json
node das2json.js <larson-html.drawio >larson-html.drawio.json
./zd/lu.py "2. python3"
python3 main.py . - '' main larson-html.drawio.json
./zd/lu.py "3. rebuild embed done"
