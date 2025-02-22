#	'ensure that formatted text option in draw.io is disabled everywhere'

generate:
	# generate version that embed JSON directly in the code
	node das2json.js <scanner.drawio >scanner.drawio.json
	python3 choreographer.py
run:
	node larson.js


## house-keeping

clean:
	rm -rf *.json
	rm -rf junk*
	rm -rf temp.*
	rm -rf *~
	rm -rf __pycache__
	rm -f generated-*
	rm -f rebuild.bash

install-js-requires:
	npm install yargs prompt-sync ohm-js @xmldom/xmldom
pyenv:
	python3 -m venv ./dw
	@echo 'do this from the command line: source dw/bin/activate'
	@echo 'do this from the command line: pip3 install websockets'
